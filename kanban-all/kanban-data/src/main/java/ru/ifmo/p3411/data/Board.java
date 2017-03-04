package ru.ifmo.p3411.data;
import javax.persistence.*;
import java.sql.Timestamp;
import java.util.Objects;
import java.util.Set;

/**
 * @author Ellepsis
* @since 1.0
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
    private Timestamp creation_date;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private KanbanUser owner;

    @OneToMany(mappedBy = "board")
    private Set<BoardUserPermission> boardUserPermissionSet;

    public Board() {
    }

    public Board(String name, String description, Timestamp creation_date, KanbanUser owner, Set<BoardUserPermission> boardUserPermissionSet) {
        this.name = name;
        this.description = description;
        this.creation_date = creation_date;
        this.owner = owner;
        this.boardUserPermissionSet = boardUserPermissionSet;
    }

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

    public Timestamp getCreation_date() {
        return creation_date;
    }

    public void setCreation_date(Timestamp creation_date) {
        this.creation_date = creation_date;
    }

    public KanbanUser getOwner() {
        return owner;
    }

    public void setOwner(KanbanUser owner) {
        this.owner = owner;
    }

    public Set<BoardUserPermission> getBoardUserPermissionSet() {
        return boardUserPermissionSet;
    }

    public void setBoardUserPermissionSet(Set<BoardUserPermission> boardUserPermissionSet) {
        this.boardUserPermissionSet = boardUserPermissionSet;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Board board = (Board) o;
        return Objects.equals(id, board.id) &&
                Objects.equals(name, board.name) &&
                Objects.equals(description, board.description) &&
                Objects.equals(creation_date, board.creation_date) &&
                Objects.equals(owner, board.owner) &&
                Objects.equals(boardUserPermissionSet, board.boardUserPermissionSet);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, description, creation_date, owner, boardUserPermissionSet);
    }
}
