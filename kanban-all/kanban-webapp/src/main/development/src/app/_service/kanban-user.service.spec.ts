/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { KanbanUserService } from './kanban-user.service';

describe('KanbanUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KanbanUserService]
    });
  });

  it('should ...', inject([KanbanUserService], (service: KanbanUserService) => {
    expect(service).toBeTruthy();
  }));
});
