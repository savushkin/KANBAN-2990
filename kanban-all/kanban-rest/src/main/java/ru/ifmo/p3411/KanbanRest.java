package ru.ifmo.p3411;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;


/**
 * @author vtaravkov
 * @since 1.0
 */
@SpringBootApplication
public class KanbanRest extends SpringBootServletInitializer {

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(KanbanRest.class);
    }

    public static void main(String... args) {
        SpringApplication.run(KanbanRest.class, args);
    }
}
