package ru.ifmo.p3411;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import ru.ifmo.p3411.data.*;
import ru.ifmo.p3411.repositories.BoardColumnRepository;
import ru.ifmo.p3411.repositories.BoardRepository;
import ru.ifmo.p3411.repositories.KanbanUserRepository;
import ru.ifmo.p3411.repositories.TaskRepository;

import java.sql.Timestamp;
import java.time.LocalDateTime;
import java.util.Collections;
import java.util.Date;
import java.util.List;


/**
 * @author vtaravkov
 * @since 1.0
 */
@SpringBootApplication
public class KanbanRest implements CommandLineRunner {

    @Autowired
    public KanbanRest(KanbanUserRepository kanbanUserRepository, BoardRepository boardRepository, BoardColumnRepository boardColumnRepository, TaskRepository taskRepository) {
        this.kanbanUserRepository = kanbanUserRepository;
        this.boardRepository = boardRepository;
        this.boardColumnRepository = boardColumnRepository;
        this.taskRepository = taskRepository;
    }

    public static void main(String... args) {
        SpringApplication.run(KanbanRest.class, args);
    }

    private final KanbanUserRepository kanbanUserRepository;

    private final BoardRepository boardRepository;

    private final BoardColumnRepository boardColumnRepository;

    private final TaskRepository taskRepository;


    public void run(String... strings) throws Exception {
        KanbanUser kanbanUser1 = new KanbanUser("ilya", "Илья", "Эдуардович", "Михайлов");
        KanbanUser kanbanUser2 = new KanbanUser("vlad", "Владислав", "Алексеевич", "Таравков");
        KanbanUser kanbanUser3 = new KanbanUser("ivan", "Савушкин", "Иван", "Евгеньевич");
        KanbanUser kanbanUser4 = new KanbanUser("egor", "Егор", "вич", "Ломагин");

        kanbanUser1 = kanbanUserRepository.save(kanbanUser1);
        kanbanUser2 = kanbanUserRepository.save(kanbanUser2);
        kanbanUser3 = kanbanUserRepository.save(kanbanUser3);
        kanbanUser4 = kanbanUserRepository.save(kanbanUser4);

        Timestamp creationDate = new Timestamp(new Date().getTime());
        Board board1 = new Board("Доска Ильи", "Канбан Доска Ильи",
                creationDate, kanbanUser1, Collections.<BoardUserPermission>emptySet());

        Board board2 = new Board("Доска Влада", "Канбан Доска Влада",
                creationDate, kanbanUser2, Collections.<BoardUserPermission>emptySet());

        Board board3 = new Board("Доска Ивана", "Канбан Доска Ивана",
                creationDate, kanbanUser3, Collections.<BoardUserPermission>emptySet());

        Board board4 = new Board("Доска Егора", "Канбан Доска Егора",
                creationDate, kanbanUser4, Collections.<BoardUserPermission>emptySet());

        board1 = boardRepository.save(board1);

        board2 = boardRepository.save(board2);

        board3 = boardRepository.save(board3);

        board4 = boardRepository.save(board4);

        BoardColumn boardColumn1 = new BoardColumn("В планах", "Задачи на будущее", board1);
        BoardColumn boardColumn2 = new BoardColumn("В процессе", "Текущие задачи", board1);
        BoardColumn boardColumn3 = new BoardColumn("Готово", "Завершенные задачи", board1);

        BoardColumn boardColumn4 = new BoardColumn("В планах", "Задачи на будущее", board2);
        BoardColumn boardColumn5 = new BoardColumn("В процессе", "Текущие задачи", board2);
        BoardColumn boardColumn6 = new BoardColumn("Готово", "Завершенные задачи", board2);

        BoardColumn boardColumn7 = new BoardColumn("В планах", "Задачи на будущее", board3);
        BoardColumn boardColumn8 = new BoardColumn("В процессе", "Текущие задачи", board3);
        BoardColumn boardColumn9 = new BoardColumn("Готово", "Завершенные задачи", board3);

        BoardColumn boardColumn10 = new BoardColumn("В планах", "Задачи на будущее", board4);
        BoardColumn boardColumn11 = new BoardColumn("В процессе", "Текущие задачи", board4);
        BoardColumn boardColumn12 = new BoardColumn("Готово", "Завершенные задачи", board4);

        boardColumn1 = boardColumnRepository.save(boardColumn1);
        boardColumn2 = boardColumnRepository.save(boardColumn2);
        boardColumn3 = boardColumnRepository.save(boardColumn3);
        boardColumn4 = boardColumnRepository.save(boardColumn4);
        boardColumn5 = boardColumnRepository.save(boardColumn5);
        boardColumn6 = boardColumnRepository.save(boardColumn6);
        boardColumn7 = boardColumnRepository.save(boardColumn7);
        boardColumn8 = boardColumnRepository.save(boardColumn8);
        boardColumn9 = boardColumnRepository.save(boardColumn9);
        boardColumn10 = boardColumnRepository.save(boardColumn10);
        boardColumn11 = boardColumnRepository.save(boardColumn11);
        boardColumn12 = boardColumnRepository.save(boardColumn12);

        List<Board> allBoardForUser = boardRepository.getAllBoardForUser(kanbanUser1);


        Task task1 = new Task("Заголовок 1", "описание описание описание описание", creationDate, creationDate,
                creationDate, kanbanUser1, boardColumn1, Collections.<TaskUser>emptySet());
        taskRepository.save(task1);
        List<Task> allTaskByBoardColumn = taskRepository.getAllTaskByBoardColumn(boardColumn1);
        List<BoardColumn> allBoardColumnForBoard = boardColumnRepository.getAllBoardColumnForBoard(board1);
        return;
    }
}
