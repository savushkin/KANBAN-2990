package ru.ifmo.p3411.repositories;

import com.sun.javafx.binding.StringFormatter;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import ru.ifmo.p3411.data.KanbanUser;
import ru.ifmo.p3411.data.SystemUser;

import java.util.List;

/**
 * @author Ellepsis
 * @since 1.0
 */
@Repository
public interface SystemUserRepository extends JpaRepository<SystemUser, Integer>, JpaSpecificationExecutor<SystemUser> {

    SystemUser findByKanbanUserId(@Param("kanbanUserId") Integer kanbanUserId);

    List<SystemUser> findSystemUserByEmail(@Param("email") String email);
}
