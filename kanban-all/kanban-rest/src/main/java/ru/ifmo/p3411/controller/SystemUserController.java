package ru.ifmo.p3411.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import ru.ifmo.p3411.data.SystemUser;
import ru.ifmo.p3411.data.Task;
import ru.ifmo.p3411.repositories.SystemUserRepository;
import ru.ifmo.p3411.repositories.TaskRepository;


/**
 * @author vtaravkov
 */
@RestController
public class SystemUserController {

    private final SystemUserRepository systemUserRepository;

    @Autowired
    public SystemUserController(SystemUserRepository systemUserRepository) {
        this.systemUserRepository = systemUserRepository;
    }

    @RequestMapping(method = RequestMethod.POST, path = "/systemUsers/addNew")
    public void save(@RequestBody SystemUser systemUser) {
        String email = systemUser.getEmail();
        if (systemUserRepository.findSystemUserByEmail(email) != null) {
            throw new IllegalArgumentException(String.format("User with email: %s exists", email));
        }
        systemUserRepository.save(systemUser);
    }
}
