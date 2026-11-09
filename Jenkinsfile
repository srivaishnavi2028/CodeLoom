
pipeline {
    agent any

    environment {
        DOCKER = 'C:\\Users\\SRI VAISHNAVI\\AppData\\Local\\Programs\\DockerDesktop\\resources\\bin\\docker.exe'
        IMAGE_NAME = 'codeloom-backend:jenkins'
        CONTAINER_NAME = 'codeloom-jenkins-test'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/srivaishnavi2028/CodeLoom.git'
            }
        }

        stage('Build Application') {
            steps {
                dir('springboot-first-app') {
                    bat 'call mvnw.cmd clean package'
                }
            }
        }

        stage('Publish Test Results') {
            steps {
                junit 'springboot-first-app/target/surefire-reports/*.xml'
            }
        }

        stage('Verify Docker') {
            steps {
                bat '"%DOCKER%" version'
            }
        }

        stage('Build Docker Image') {
            steps {
                dir('springboot-first-app') {
                    bat '"%DOCKER%" build -t %IMAGE_NAME% .'
                }
            }
        }

        stage('Deploy Container') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'codeloom-db-password',
                        variable: 'DB_PASSWORD'
                    )
                ]) {
                    bat '''
                    "%DOCKER%" rm -f %CONTAINER_NAME% >NUL 2>&1

                    "%DOCKER%" run -d --name %CONTAINER_NAME% -p 8084:8081 -e DB_URL=jdbc:mysql://host.docker.internal:3306/elearning -e DB_USERNAME=root -e DB_PASSWORD="%DB_PASSWORD%" -e SPRING_AI_OLLAMA_BASE_URL=http://host.docker.internal:11434 %IMAGE_NAME%

                    if errorlevel 1 exit /b 1
                    '''
                }
            }
        }

        stage('API Testing') {
            steps {
                bat '''
                powershell -NoProfile -ExecutionPolicy Bypass -Command "$url='http://localhost:8084/welcome'; $success=$false; for($i=1; $i -le 30; $i++) { try { $response=Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 5; if($response.StatusCode -eq 200) { Write-Host 'API TEST PASSED'; Write-Host $response.Content; $success=$true; break } } catch { Write-Host ('Waiting for API... Attempt ' + $i) }; Start-Sleep -Seconds 2 }; if(-not $success) { Write-Host 'API TEST FAILED'; exit 1 }"
                '''
            }
        }
    }

    post {
        success {
            echo 'CodeLoom CI/CD Pipeline completed successfully!'
        }

        failure {
            echo 'CodeLoom CI/CD Pipeline failed. Check the console output.'
        }

        always {
            echo 'Pipeline execution finished.'
        }
    }
}
