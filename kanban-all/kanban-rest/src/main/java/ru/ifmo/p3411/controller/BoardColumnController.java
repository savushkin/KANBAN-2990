package ru.ifmo.p3411.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.ifmo.p3411.data.BoardColumn;
import ru.ifmo.p3411.data.Task;
import ru.ifmo.p3411.repositories.BoardColumnRepository;
import ru.ifmo.p3411.repositories.TaskRepository;


/**
 * @author vtaravkov
 */
@RestController
public class BoardColumnController {

    private final BoardColumnRepository boardColumnRepository;

    @Autowired
    public BoardColumnController(BoardColumnRepository boardColumnRepository) {
        this.boardColumnRepository = boardColumnRepository;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/boardColumns/addNew")
    public void save(@RequestBody BoardColumn task) {
        boardColumnRepository.save(task);
    }
}
