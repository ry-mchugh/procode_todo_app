import { expect, assert } from 'chai';
const { binding, given, then, when } = require('cucumber-tsflow');

@binding()
export class TodoSteps {
  private tasks: string[] = [];
  private completedTasks: string[] = [];

  @given(/^I am on the todo application$/)
  public givenIAmOnTodoApplication(): void {
  }

  @when(/^I add a task "(.*?)"$/)
  public whenIAddTask(taskName: string): void {
    this.tasks.push(taskName);
  }

  @then(/^the task "(.*?)" should be displayed in the todo list$/)
  public thenTaskShouldBeDisplayed(taskName: string): void {
    expect(this.tasks).to.include(taskName);
  }

  @given(/^I have a task "(.*?)" in the todo list$/)
  public givenIHaveTaskInList(taskName: string): void {
    this.tasks.push(taskName);
  }

  @when(/^I mark the task as completed$/)
  public whenIMarkTaskCompleted(): void {
    const taskToComplete = this.tasks.pop();
    if (taskToComplete) {
      this.completedTasks.push(taskToComplete);
    }
  }

  @then(/^the task "(.*?)" should be moved to the completed list$/)
  public thenTaskShouldBeMovedToCompleted(taskName: string): void {
    expect(this.completedTasks).to.include(taskName);
  }

  @when(/^I delete the task$/)
  public whenIDeleteTask(): void {
    this.tasks.pop();
  }

  @then(/^the task "(.*?)" should not be displayed in the todo list$/)
  public thenTaskShouldNotBeDisplayed(taskName: string): void {
    expect(this.tasks).to.not.include(taskName);
  }
}