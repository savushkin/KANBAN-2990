package ru.ifmo.p3411.data;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Set;

/**
 * @author Ellepsis
 * @since 1.0
 */
@Entity
@Table(name = "system_user")
public class SystemUser implements Serializable{

    @Id
    @GeneratedValue
    private Integer kanbanUserId;

    @OneToOne
    @PrimaryKeyJoinColumn
    private KanbanUser kanbanUser;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    @Column(name = "registration_date", nullable = false)
    private LocalDateTime registrationDate;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "system_user_permission", joinColumns = {
            @JoinColumn(name = "system_user_id", nullable = false)},
            inverseJoinColumns = {@JoinColumn(name = "system_permission_id", nullable = false)})
    private Set<SystemPermission> systemPermissions;

    public Integer getKanbanUserId() {
        return kanbanUserId;
    }

    public void setKanbanUserId(Integer kanbanUserId) {
        this.kanbanUserId = kanbanUserId;
    }

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

    public LocalDateTime getRegistrationDate() {
        return registrationDate;
    }

    public void setRegistrationDate(LocalDateTime registrationDate) {
        this.registrationDate = registrationDate;
    }

    public Set<SystemPermission> getSystemPermissions() {
        return systemPermissions;
    }

    public void setSystemPermissions(Set<SystemPermission> systemPermissions) {
        this.systemPermissions = systemPermissions;
    }
}
