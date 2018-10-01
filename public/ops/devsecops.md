Standard DevSecOps Platform Framework

Goal: Safer Software Sooner

Deployment frequency,
Change lead time (for applications),
Change volume,


---

Image Management: 
creation, maintenance, and delivery of images to application developers.

Developers are provided base OS images and images that provide component-level functionality that has also been hardened (e.g., standard images pre-packaged with hardened components i.e. databases or web/application servers). Images and components undergo automatic testing and are pre-approved by security and operations groups.

---

Logging, Monitoring, and Alerting:
managing the health and security of an application’s operational state

- capturing what events have occurred
- providing information about those events
- informing the appropriate parties when those events indicate issues to be resolved

Application owners have full access to their application event information with monitoring and alerting flexibility for their own use

---

Patch management:
the process by which the operating system, software, and supporting services are upgraded

The platform automatically tests new patches on applications which run on it, informing the appropriate parties if decision points are reached. No downtime for patching.

---

Platform Governance:
the processes around and advertisement of changes to the platform, inclusive of managing the security and availability of the platform.

Platform change is conducted through strictly defined processes with clear criteria defined that allow for rapid change; the platform automates changes and endeavors to impact the minimum number of application developers through that automation

---

Application Development, Testing, and Operations:
the development of software by an application team, the unit and integration testing of that software, and the ability to manage that software in operation

Development and operational environments are identical and immutable. Environments can be stood up and torn down via automation. All changes to the running system are logged and broadly conducted through scripting rather than actual access to the running system. All necessary tests, including security tests, are run as part of the deployment process. Development environments may be instantiated and torn down as needed.

---

Application Deployment:
the processes by which an application in development reaches production, most likely going through multiple environments to evaluate the correctness of deployment

The only manual steps to deployment are those explicitly designed to meet application expectations.

---

Accounts, Privileges, Credentials, and Secrets Management:
the ability for user accounts to be created, given permissions to access, create, and destroy resources, and share secrets securely between the platform and the application as appropriate.

User management is self-service with appropriate security limitations. Secrets are created/shared between parts of the platform, without people needing to set/interact with them.

---

Availability and Performance Management:
the processes that allow application owners to be assured that the applications will be available, potentially in the face of disaster, and be responsive to user interactions

The platform provides direct insight into application health and performance. Applications can be seamlessly moved between hosting regions/zones in reaction to DR or threat activity.

---

Network Management:
the creation, maintenance and management of the network structures

The platform governs the overarching infrastructure supporting the applications, with defined and assessed separation of network concerns. Application owners can make limited changes to their network environment sufficient to self-manage the deployment of their applications and creation of new components of their application, on their own, with appropriate compliance checks.


---

Backup and Data Lifecycle Management:
application developers to ensure that their data is maintained over time and, in the case of failure of any subsystems, that it can be recovered 

The full data lifecycle is owned by the platform through automation.

---

reference: https://gsa.gov
