package ru.ifmo.p3411.data;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * @author Ellepsis
 * @since 1.0
 */
@Entity
@Table(name = "task_user")
public class TaskUser implements Serializable{

    @Id
    @ManyToOne
    @JoinColumn(name = "task_id", nullable = false)
    private Task task;

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private KanbanUser kanbanUser;

    @Column(name = "comment")
    private String comment;

    public Task getTask() {
        return task;
    }

    public void setTask(Task task) {
        this.task = task;
    }

    public KanbanUser getKanbanUser() {
        return kanbanUser;
    }

    public void setKanbanUser(KanbanUser kanbanUser) {
        this.kanbanUser = kanbanUser;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        TaskUser taskUser = (TaskUser) o;
        return Objects.equals(task, taskUser.task) &&
                Objects.equals(kanbanUser, taskUser.kanbanUser) &&
                Objects.equals(comment, taskUser.comment);
    }

    @Override
    public int hashCode() {
        return Objects.hash(task, kanbanUser, comment);
    }
}
