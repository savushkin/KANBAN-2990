package ru.ifmo.p3411.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.ifmo.p3411.data.Board;
import ru.ifmo.p3411.repositories.BoardRepository;

import java.util.List;


/**
 * @author vtaravkov
 */
@RestController
public class BoarController {

    private final BoardRepository boardRepository;

    @Autowired
    public BoarController(BoardRepository boardRepository) {
        this.boardRepository = boardRepository;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/boards/addNew")
    public void save(@RequestBody Board board) {
        boardRepository.save(board);
    }
}
