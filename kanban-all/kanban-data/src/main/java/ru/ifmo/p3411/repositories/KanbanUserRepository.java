package ru.ifmo.p3411.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.ifmo.p3411.data.KanbanUser;

import java.util.List;

/**
 * @author Ellepsis
 * @since 1.0
 */
@Repository
public interface KanbanUserRepository extends JpaRepository<KanbanUser, Integer>, JpaSpecificationExecutor<KanbanUser> {

    @Query
    List<KanbanUser> findKanbanUsersByFirstName(@Param("firstName") String firstName);

    @Query
    List<KanbanUser> findKanbanUsersByLastName(@Param("lastName") String lastName);

    @Query
    List<KanbanUser> findKanbanUsersBySecondName(@Param("middleName") String middleName);
}
