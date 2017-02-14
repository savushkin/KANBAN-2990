package ru.ifmo.p3411.data;

import javax.persistence.*;
import java.util.Objects;

/**
 * @author Ellepsis
 * @since 1.0
 */
@Entity
@Table(name = "kanban_user")
public class KanbanUser {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "kanban_user_id_seq")
    @SequenceGenerator(name = "kanban_user_id_seq", sequenceName = "kanban_user_id_seq", allocationSize = 1)
    private Integer id;

    @Column(name = "username", nullable = false)
    private String username;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "second_name")
    private String secondName;

    @Column(name = "last_name")
    private String lastName;

    public KanbanUser() {
    }

    public KanbanUser(String username, String firstName, String secondName, String lastName) {
        this.username = username;
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getSecondName() {
        return secondName;
    }

    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        KanbanUser that = (KanbanUser) o;
        return Objects.equals(id, that.id) &&
                Objects.equals(username, that.username) &&
                Objects.equals(firstName, that.firstName) &&
                Objects.equals(secondName, that.secondName) &&
                Objects.equals(lastName, that.lastName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, username, firstName, secondName, lastName);
    }
}
