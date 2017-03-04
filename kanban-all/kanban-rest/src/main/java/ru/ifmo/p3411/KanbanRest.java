package ru.ifmo.p3411;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.PropertySource;
import ru.ifmo.p3411.repositories.KanbanUserRepository;


/**
 * @author vtaravkov
 * @since 1.0
 */
@SpringBootApplication
public class KanbanRest{

    @Autowired
    KanbanUserRepository kanbanUserRepository;

    public static void main(String... args) {
        SpringApplication.run(KanbanRest.class, args);
    }
}
