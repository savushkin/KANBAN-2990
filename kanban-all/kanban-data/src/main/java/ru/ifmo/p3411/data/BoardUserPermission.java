package ru.ifmo.p3411.data;

import javax.persistence.*;

/**
 * Created by Ellepsis on 12.02.2017.
 */
@Entity
@Table(name = "board_user_permission")
public class BoardUserPermission {

    @Id
    @ManyToOne
    @JoinColumn(name = "board_id")
    private Board board;

    @Id
    @ManyToOne
    @JoinColumn(name = "user_id")
    private KanbanUser kanbanUser;

    @ManyToOne
    @JoinColumn(name = "board_permission_id")
    private BoardPermission boardPermission;
}
