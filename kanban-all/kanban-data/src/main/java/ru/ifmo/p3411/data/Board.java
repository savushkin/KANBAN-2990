package ru.ifmo.p3411.data;

import javax.persistence.*;
import java.util.Set;

/**
 * Created by Ellepsis on 11.02.2017.
 */
@Entity
@Table(name = "board")
public class Board {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "board_id_seq")
    @SequenceGenerator(name = "board_id_seq", sequenceName = "board_id_seq", allocationSize = 1)
    private Integer id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "creation_date", nullable = false)
    private String creation_date;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private KanbanUser owner;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(String creation_date) {
        this.creation_date = creation_date;
    }

    public KanbanUser getOwner() {
        return owner;
    }

    public void setOwner(KanbanUser owner) {
        this.owner = owner;
    }
}
