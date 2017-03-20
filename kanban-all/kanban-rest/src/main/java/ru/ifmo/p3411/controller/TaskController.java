package ru.ifmo.p3411.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import ru.ifmo.p3411.data.Board;
import ru.ifmo.p3411.data.Task;
import ru.ifmo.p3411.data.TaskUser;
import ru.ifmo.p3411.repositories.BoardRepository;
import ru.ifmo.p3411.repositories.TaskRepository;

import java.util.Set;


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
//        Set<TaskUser> taskUser1 = task.getTaskUser();
//        task.setTaskUser(null);
//        Task save = taskRepository.save(task);
//        taskUser1.forEach(o -> o.setTask(save));
//        save.setTaskUser(taskUser1);
//        taskRepository.save(save);
    }

    @RequestMapping(method = RequestMethod.DELETE, path = "/tasks/remove/{id}")
    public void remove(@PathVariable Integer id) {
        taskRepository.delete(id);
    }

    @RequestMapping(method = RequestMethod.GET, path = "/tasks/info/{id}")
    public Task info(@PathVariable Integer id) {
        return taskRepository.findOne(id);
    }

    @RequestMapping(method = RequestMethod.PUT, path = "/tasks/save/{id}")
    public Task info(@PathVariable Integer id, @RequestBody Task task) {
        return taskRepository.save(task);
    }


}
