package ru.ifmo.p3411;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.restdocs.AutoConfigureRestDocs;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.test.context.junit4.SpringRunner;
import ru.ifmo.p3411.data.KanbanUser;
import ru.ifmo.p3411.data.SystemUser;
import ru.ifmo.p3411.repositories.*;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

import static org.junit.Assert.assertEquals;


/**
 * @author vtaravkov
 * @since 1.0
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class SmokeTest {

    @Autowired
    private BoardColumnRepository boardColumnRepository;
    @Autowired
    private BoardPermissionRepository boardPermissionRepository;
    @Autowired
    private BoardRepository boardRepository;
    @Autowired
    private KanbanUserRepository kanbanUserRepository;
    @Autowired
    private SystemPermissionRepository systemPermissionRepository;
    @Autowired
    private SystemUserRepository systemUserRepository;
    @Autowired
    private TaskRepository taskRepository;

    @Test
    public void puff() {
        boardColumnRepository.findAll();
        boardPermissionRepository.findAll();
        boardRepository.findAll();
        kanbanUserRepository.findAll();
        systemPermissionRepository.findAll();
        systemUserRepository.findOne(1);
        taskRepository.findAll();
        KanbanUser kanbanUser = new KanbanUser();
        kanbanUser.setId(1);
        kanbanUser.setUsername("test");
        kanbanUserRepository.save(kanbanUser);
        SystemUser systemUser = new SystemUser();
        systemUser.setEmail("123");
        systemUser.setPasswordHash("asldfjas");
        systemUser.setKanbanUser(kanbanUser);
        systemUser.setRegistrationDate(LocalDateTime.ofInstant((new Date()).toInstant(), ZoneId.systemDefault()));
        SystemUser save = systemUserRepository.save(systemUser);
        SystemUser systemUserDB = systemUserRepository.findByKanbanUserId(kanbanUser.getId());
        assertEquals(save, systemUserDB);
    }

    @SpringBootApplication
    public static class TestApp {
        public static void main(String... args) {
            ConfigurableApplicationContext run = SpringApplication.run(TestApp.class, args);
        }
    }
}
