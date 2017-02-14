package ru.ifmo.p3411;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.web.client.RestClientTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.context.ApplicationContextInitializer;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.client.MockRestServiceServer;
import ru.ifmo.p3411.data.KanbanUser;
import ru.ifmo.p3411.data.Task;
import ru.ifmo.p3411.repositories.BoardColumnRepository;
import ru.ifmo.p3411.repositories.BoardRepository;
import ru.ifmo.p3411.repositories.KanbanUserRepository;
import ru.ifmo.p3411.repositories.TaskRepository;


/**
 * @author vtaravkov
 * @since 1.0
 */
@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SmokeTest {
    @Autowired
    private KanbanUserRepository userRepository;


    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void puff() {
        KanbanUser expected = new KanbanUser("uname", "fname", null, "lname");
        expected = userRepository.save(expected);
        KanbanUser actual = restTemplate.getForObject("/kanbanUsers/" + expected.getId(), KanbanUser.class);
        Assert.assertEquals("REST works OK", expected, actual);
    }
}
