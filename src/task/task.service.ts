import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TaskService {
  private tasks = [
    {
      id: 1,
      title: 'Sample Task',
      description: 'This is a sample task description.',
      completed: false,
    },
    {
      id: 2,
      title: 'Another Sample Task',
      description: 'This is another sample task description.',
      completed: true,
    },
  ];

  findAll() {
    return;
  }

  findById(id: number) {
    if (!this.tasks.find((task) => task.id === id)) {
      throw new NotFoundException('Task not found');
    }
    return this.tasks.find((task) => task.id === id);
  }

  create() {
    const newTask = {
      id: this.tasks.length + 1,
      title: `New Task ${this.tasks.length + 1}`,
      description: '',
      completed: false,
    };
    this.tasks.push(newTask);
    return this.tasks;
  }
}
