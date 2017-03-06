package ru.ifmo.p3411.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.ifmo.p3411.data.Board;
import ru.ifmo.p3411.data.Task;
import ru.ifmo.p3411.repositories.BoardRepository;
import ru.ifmo.p3411.repositories.TaskRepository;


/**
 * @author vtaravkov
 */
@RestController
public class TaskController {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/tasks/addNew")
    public void save(@RequestBody Task task) {
        taskRepository.save(task);
    }
}
