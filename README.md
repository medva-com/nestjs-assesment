### Developer Assessment: NestJS Modules for Workable and Monday Platforms

#### Objective:

The goal of this assessment is to evaluate your technical skills in developing with NestJS, particularly your ability to
create and manage modules, integrate with external APIs, and handle webhooks. You will be tasked with creating two
interconnected modules within a provided NestJS boilerplate application.

#### Project Overview:

- **Module 1 (Workable Support)**: Develop a module to accept data from a Workable platform webhook. This module should
  include a controller for handling incoming webhook payloads, a service for processing the data, and DTOs for
  validating the incoming payload based on an example provided (see sample-objects/workable-webhook-payload.json).

- **Module 2 (Monday Support)**: Create a module that includes a service capable of writing data back to the Monday API.
  This service should feature a function specifically for API interactions with Monday.com. You can not, and therefore
  should not, implement the entire Monday API, but rather focus on the specific functionality required for this project.

These modules should be designed to work in tandem, particularly focusing on accepting a webhook payload through the
Workable module and utilizing the Monday module to interact with the Monday API.

For this example the webhook payload will be a candidate application from Workable, and the Monday API interaction will
write the candidate to a Monday board.


#### Assessment Criteria:

##### Technical Skills:

- **NestJS Module Creation**: Ability to efficiently structure and create modules, controllers, services, and DTOs
  following NestJS best practices.
- **API Integration**: Competence in implementing service functions for external API communication, including error
  handling and response management.
- **DTOs and Payload Validation**: Accuracy in implementing DTOs for payload validation, ensuring they match the
  provided examples and are effectively used for runtime validation.
- **Inter-module Communication**: Skill in designing modules that can interact with each other in a decoupled yet
  cohesive manner.

##### Project Requirements:

- **Workable Module Functionality**:
    - Proper implementation of webhook payload acceptance and validation.
    - Effective use of DTOs for incoming data validation.
- **Monday Module Functionality**:
    - Implementation of service function for writing data to the Monday API, including handling various response
      scenarios.
- **Code Quality**:
    - Clarity, maintainability, and documentation of code.
    - Adherence to TypeScript and NestJS best practices.

##### Documentation and Testing:

- Provide clear documentation for any public interfaces and significant implementation decisions.
- Bonus (not required): Include unit tests for critical components of your application, particularly focusing on the service logic and its
  interaction with external APIs.

#### Submission Guidelines:

- Submit your completed project by zip file or as a pull request to the GitHub project.
- Ensure your code is well-documented, especially public interfaces and complex logic.
- Provide a README file detailing how to run your application, including any necessary setup steps and environment
  variables.

#### Evaluation Process:

- Your submission will be reviewed for code quality, functionality, and adherence to the project requirements.
- We may run the application with a real or simulated webhook payload to test the functionality end-to-end.
- A feedback session may be scheduled to discuss your implementation choices and to better understand your
  problem-solving approaches.

This assessment is designed to showcase your skills in NestJS development, API integration, and your ability to follow
specific project requirements. We look forward to reviewing your submission.

## Resources:

#### Monday API Documentation:

https://developer.monday.com/api-reference/reference/items#create-an-item

#### Workable Webhook Subscription:

https://workable.readme.io/reference/webhook-subscriptions-candidates-employees