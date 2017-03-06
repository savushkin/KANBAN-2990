package ru.ifmo.p3411.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.ifmo.p3411.data.Board;
import ru.ifmo.p3411.data.BoardColumn;

import java.util.List;

/**
 * @author Ellepsis
 * @since 1.0
 */
@Repository
public interface BoardColumnRepository extends JpaRepository<BoardColumn, Long>, JpaSpecificationExecutor<BoardColumn> {
    @Query(value = "select b from BoardColumn b " +
            "where b.board.id = :board")
    List<BoardColumn> getAllBoardColumnForBoard(@Param(value = "board") Integer board);
}
