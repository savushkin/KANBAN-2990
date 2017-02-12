package ru.ifmo.p3411.data;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author Ellepsis
 * @since 1.0
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

    public Board getBoard() {
        return board;
    }

    public void setBoard(Board board) {
        this.board = board;
    }

    public KanbanUser getKanbanUser() {
        return kanbanUser;
    }

    public void setKanbanUser(KanbanUser kanbanUser) {
        this.kanbanUser = kanbanUser;
    }

    public BoardPermission getBoardPermission() {
        return boardPermission;
    }

    public void setBoardPermission(BoardPermission boardPermission) {
        this.boardPermission = boardPermission;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BoardUserPermission that = (BoardUserPermission) o;
        return Objects.equals(board, that.board) &&
                Objects.equals(kanbanUser, that.kanbanUser) &&
                Objects.equals(boardPermission, that.boardPermission);
    }

    @Override
    public int hashCode() {
        return Objects.hash(board, kanbanUser, boardPermission);
    }
}
