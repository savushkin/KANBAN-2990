package ru.ifmo.p3411.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;
import ru.ifmo.p3411.data.*;


/**
 * @author vtaravkov
 * @since 1.0
 */
@Configuration
public class RestConfig extends RepositoryRestConfigurerAdapter {
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        // TODO ellipsis introduce GenericEntity parent for these
        config.exposeIdsFor(Board.class);
        config.exposeIdsFor(BoardColumn.class);
        config.exposeIdsFor(BoardPermission.class);
        config.exposeIdsFor(BoardUserPermission.class);
        config.exposeIdsFor(KanbanUser.class);
        config.exposeIdsFor(SystemPermission.class);
        config.exposeIdsFor(SystemUser.class);
        config.exposeIdsFor(Task.class);
        config.exposeIdsFor(TaskUser.class);
    }
}
