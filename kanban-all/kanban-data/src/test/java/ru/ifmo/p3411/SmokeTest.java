package ru.ifmo.p3411;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;



/**
 * @author vtaravkov
 * @since 1.0
 */
@RunWith(SpringRunner.class)
@DataJpaTest
public class SmokeTest {
    @Test
    public void puff() {

    }

    @SpringBootApplication
    public static class TestApp {
        public static void main(String... args) {
            SpringApplication.run(TestApp.class, args);
        }
    }
}
