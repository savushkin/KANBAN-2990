package ru.ifmo.p3411.data;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by Ellepsis on 11.02.2017.
 */
@Entity
@Table(name = "system_user")
public class SystemUser {

    @Id
    @OneToOne
    @PrimaryKeyJoinColumn(name = "kanban_user")
    private KanbanUser kanbanUser;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "system_user_permission", joinColumns = {
            @JoinColumn(name = "system_user_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "system_permission_id", nullable = false)})
    private Set<SystemPermission> systemPermissions;

    public KanbanUser getKanbanUser() {
        return kanbanUser;
    }

    public void setKanbanUser(KanbanUser kanbanUser) {
        this.kanbanUser = kanbanUser;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPasswordHash() {
        return passwordHash;
    }

    public void setPasswordHash(String passwordHash) {
        this.passwordHash = passwordHash;
    }

    public Set<SystemPermission> getSystemPermissions() {
        return systemPermissions;
    }

    public void setSystemPermissions(Set<SystemPermission> systemPermissions) {
        this.systemPermissions = systemPermissions;
    }
}
