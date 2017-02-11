package ru.ifmo.p3411.data;

import javax.persistence.*;

/**
 * Created by Ellepsis on 12.02.2017.
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
}
