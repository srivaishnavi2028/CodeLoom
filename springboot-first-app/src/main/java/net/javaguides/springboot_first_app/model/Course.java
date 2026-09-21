package net.javaguides.springboot_first_app.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
@Entity
public class Course {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String title;
    private String duration;
    private String youtubeLink;
    @ManyToOne
    private Instructor instructor;
    public Course() {
    }
    public Course(Integer id, String name, Instructor instructor,
                  String title, String duration, String youtubeLink) {
        this.id = id;
        this.name = name;
        this.instructor = instructor;
        this.title = title;
        this.duration = duration;
        this.youtubeLink = youtubeLink;
    }
    public Integer getId() {
        return id;
    }
    public void setId(Integer id) {
        this.id = id;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Instructor getInstructor() {
        return instructor;
    }
    public void setInstructor(Instructor instructor) {
        this.instructor = instructor;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getDuration() {
        return duration;
    }
    public void setDuration(String duration) {
        this.duration = duration;
    }
    public String getYoutubeLink() {
        return youtubeLink;
    }
    public void setYoutubeLink(String youtubeLink) {
        this.youtubeLink = youtubeLink;
    }
}