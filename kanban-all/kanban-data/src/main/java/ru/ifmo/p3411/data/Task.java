package ru.ifmo.p3411.data;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Set;

/**
 * @author Ellepsis
 * @since 1.0
 */
@Entity
@Table(name = "task")
public class Task {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "task_id_seq")
    @SequenceGenerator(name = "task_id_seq", sequenceName = "task_id_seq", allocationSize = 1)
    private Integer id;

    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "description")
    private String description;

    @Column(name = "creation_date", nullable = false)
    private LocalDateTime creationDate;

    @Column(name = "estimated_time")
    private LocalDateTime estimatedTime;

    @Column(name = "spent_time")
    private LocalDateTime spentTime;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private KanbanUser owner;

    @ManyToOne
    @JoinColumn(name = "board_column_id", nullable = false)
    private BoardColumn boardColumn;

    @OneToMany(mappedBy = "task")
    private Set<TaskUser> taskUser;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDateTime getEstimatedTime() {
        return estimatedTime;
    }

    public void setEstimatedTime(LocalDateTime estimatedTime) {
        this.estimatedTime = estimatedTime;
    }

    public LocalDateTime getSpentTime() {
        return spentTime;
    }

    public void setSpentTime(LocalDateTime spentTime) {
        this.spentTime = spentTime;
    }

    public KanbanUser getOwner() {
        return owner;
    }

    public void setOwner(KanbanUser owner) {
        this.owner = owner;
    }

    public BoardColumn getBoardColumn() {
        return boardColumn;
    }

    public void setBoardColumn(BoardColumn boardColumn) {
        this.boardColumn = boardColumn;
    }

    public Set<TaskUser> getTaskUser() {
        return taskUser;
    }

    public void setTaskUser(Set<TaskUser> taskUser) {
        this.taskUser = taskUser;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return Objects.equals(id, task.id) &&
                Objects.equals(title, task.title) &&
                Objects.equals(description, task.description) &&
                Objects.equals(creationDate, task.creationDate) &&
                Objects.equals(estimatedTime, task.estimatedTime) &&
                Objects.equals(spentTime, task.spentTime) &&
                Objects.equals(owner, task.owner) &&
                Objects.equals(boardColumn, task.boardColumn) &&
                Objects.equals(taskUser, task.taskUser);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, description, creationDate, estimatedTime, spentTime, owner, boardColumn, taskUser);
    }
}
