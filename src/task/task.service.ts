import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-tasak.dto';

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
    return this.tasks;
  }

  findById(id: number) {
    const task = this.tasks.find((task) => task.id === id);
    if (!task) {
      throw new NotFoundException('Task not found');
    }
    return task;
  }

  create(dto: CreateTaskDto) {
    const newTask = {
      id: this.tasks.length + 1,
      title: dto.title,
      description: dto.description,
      completed: dto.completed,
    };
    this.tasks.push(newTask);
    return this.tasks;
  }

  update(id: number, dto: UpdateTaskDto) {
    const task = this.findById(id);
    Object.assign(task, dto);

    return task;
  }

  patchUpdate(id: number, dto: Partial<UpdateTaskDto>) {
    const task = this.findById(id);
    Object.assign(task, dto);
    return task;
  }

  delete(id: number) {
    const task = this.findById(id);
    this.tasks = this.tasks.filter((t) => t.id !== id);
    return task;
  }
}
