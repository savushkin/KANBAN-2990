package ru.ifmo.p3411.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import ru.ifmo.p3411.data.BoardPermission;

/**
 * @author Ellepsis
 * @since 1.0
 */
@Repository
public interface BoardPermissionRepository extends JpaRepository<BoardPermission, Integer>,
        JpaSpecificationExecutor<BoardPermission> {

}
