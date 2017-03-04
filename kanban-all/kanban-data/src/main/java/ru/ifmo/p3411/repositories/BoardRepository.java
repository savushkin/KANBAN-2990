package ru.ifmo.p3411.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.ifmo.p3411.data.Board;
import ru.ifmo.p3411.data.KanbanUser;

import java.util.List;

/**
 * @author Ellepsis
 * @since 1.0
 */
@Repository
public interface BoardRepository extends JpaRepository<Board, Integer>, JpaSpecificationExecutor<Board> {

    @Query("select b from Board b " +
            "where b.owner = :user")
    List<Board> getAllBoardForUser(@Param(value = "user") KanbanUser kanbanUser);
}
