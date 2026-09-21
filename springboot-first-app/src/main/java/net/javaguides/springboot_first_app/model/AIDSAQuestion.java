package net.javaguides.springboot_first_app.model;

import java.util.List;

public class AIDSAQuestion {

    private String problem;
    private List<Example> examples;
    private String explanation;
    private String approach;
    private String javaSolution;
    private String pythonSolution;
    private String cppSolution;

    public AIDSAQuestion() {
    }

    public AIDSAQuestion(
            String problem,
            List<Example> examples,
            String explanation,
            String approach,
            String javaSolution,
            String pythonSolution,
            String cppSolution) {

        this.problem = problem;
        this.examples = examples;
        this.explanation = explanation;
        this.approach = approach;
        this.javaSolution = javaSolution;
        this.pythonSolution = pythonSolution;
        this.cppSolution = cppSolution;
    }

    public String getProblem() {
        return problem;
    }

    public void setProblem(String problem) {
        this.problem = problem;
    }

    public List<Example> getExamples() {
        return examples;
    }

    public void setExamples(List<Example> examples) {
        this.examples = examples;
    }

    public String getExplanation() {
        return explanation;
    }

    public void setExplanation(String explanation) {
        this.explanation = explanation;
    }

    public String getApproach() {
        return approach;
    }

    public void setApproach(String approach) {
        this.approach = approach;
    }

    public String getJavaSolution() {
        return javaSolution;
    }

    public void setJavaSolution(String javaSolution) {
        this.javaSolution = javaSolution;
    }

    public String getPythonSolution() {
        return pythonSolution;
    }

    public void setPythonSolution(String pythonSolution) {
        this.pythonSolution = pythonSolution;
    }

    public String getCppSolution() {
        return cppSolution;
    }

    public void setCppSolution(String cppSolution) {
        this.cppSolution = cppSolution;
    }
}