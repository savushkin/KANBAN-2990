package ru.ifmo.p3411.data;

import javax.persistence.*;

/**
 * Created by Ellepsis on 12.02.2017.
 */
@Entity
@Table(name = "task_user")
public class TaskUser {

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
}
