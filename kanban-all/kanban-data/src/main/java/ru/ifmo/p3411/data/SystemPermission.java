package ru.ifmo.p3411.data;

import javax.persistence.*;

/**
 * Created by Ellepsis on 11.02.2017.
 */
@Entity
@Table(name = "system_permission")
public class SystemPermission {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "system_permission_id_seq")
    @SequenceGenerator(name = "system_permission_id_seq", sequenceName = "system_permission_id_seq", allocationSize = 1)
    private Integer id;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "permission", nullable = false)
    private String permission;
}
