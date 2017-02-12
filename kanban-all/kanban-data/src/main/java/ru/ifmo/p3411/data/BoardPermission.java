package ru.ifmo.p3411.data;

import javax.persistence.*;
import java.util.Objects;

/**
 *
 * @author Ellepsis
 * @since 1.0
 */
@Entity
@Table(name = "board_permission")
public class BoardPermission {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "board_permission_id_seq")
    @SequenceGenerator(name = "board_permission_id_seq", sequenceName = "board_permission_id_seq", allocationSize = 1)
    private Integer id;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "permission", nullable = false)
    private String permission;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPermission() {
        return permission;
    }

    public void setPermission(String permission) {
        this.permission = permission;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        BoardPermission that = (BoardPermission) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(description, that.description) &&
                Objects.equals(permission, that.permission);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, permission);
    }
}
