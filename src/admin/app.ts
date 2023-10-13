import favicon from "./extensions/favicon.png";

const colors =  {
  // primary colors
  primary100: "#DAF9F4",
  primary200: "#B7F3EE",
  primary500: "#357D8A",
  primary600: "#266476",
  primary700: "#1A4C63",

  // secondary
  secondary100: "#FFFBCC",
  secondary200: "#FFF599",
  secondary500: "#FFDE00",
  secondary600: "#DBBB00",
  secondary700: "#B79A00",
}

export default {
  config: {
    locales: ["en"],
    head: { favicon: favicon },
    theme: {
      colors: {
        // primary colors
        ...colors,
        // button color
        buttonPrimary500: colors.primary500,
        buttonPrimary600: colors.primary600,
      },
    },
    translations: {
      en: {
        // email plugin
        // "email.Settings.email.plugin.placeholder.defaultFrom": "ex: Hyperce No-Reply '<'no-reply@hyperce.io'>'",
        // "email.Settings.email.plugin.placeholder.defaultReplyTo": "ex: Hyperce '<'example@hyperce.io'>'",
        "Settings.email.plugin.placeholder.defaultFrom": "ex: Hyperce No-Reply <no-reply@hyperce.io>",
        "Settings.email.plugin.placeholder.defaultReplyTo": "ex: Hyperce <example@hyperce.io>",
        "Settings.email.plugin.placeholder.testAddress": "ex: developer@example.com",
        
        // content manager
        "notification.info.autoreaload-disable": "Admin is in production mode, editing content types is disabled. Please switch to development mode by starting your server with `yarn develop`.",

        // app
        "app.components.BlockLink.blog": "",
        "app.components.BlockLink.blog.content": "",
        "app.components.BlockLink.cloud": "",
        "app.components.BlockLink.cloud.content": "",
        "app.components.BlockLink.code": "",
        "app.components.BlockLink.code.content": "",
        "app.components.BlockLink.documentation.content": "",
        "app.components.BlockLink.tutorial": "",
        "app.components.BlockLink.tutorial.content": "",

        // -------
        Analytics: "Analytics",
        "Auth.components.Oops.text": "Your account has been suspended.",
        "Auth.components.Oops.text.admin":
          "If this is a mistake, please contact your administrator.",
        "Auth.components.Oops.title": "Oops...",
        "Auth.form.active.label": "Active",
        "Auth.form.button.forgot-password": "Send Email",
        "Auth.form.button.go-home": "GO BACK HOME",
        "Auth.form.button.login": "Login",
        "Auth.form.button.login.providers.error":
          "We cannot connect you through the selected provider.",
        "Auth.form.button.login.strapi": "Log in via Hyperce",
        "Auth.form.button.password-recovery": "Password Recovery",
        "Auth.form.button.register": "Let's start",
        "Auth.form.confirmPassword.label": "Confirm Password",
        "Auth.form.currentPassword.label": "Current Password",
        "Auth.form.email.label": "Email",
        "Auth.form.email.placeholder": "e.g. kai@doe.com",
        "Auth.form.error.blocked":
          "Your account has been blocked by the administrator.",
        "Auth.form.error.code.provide": "Incorrect code provided.",
        "Auth.form.error.confirmed": "Your account email is not confirmed.",
        "Auth.form.error.email.invalid": "This email is invalid.",
        "Auth.form.error.email.provide":
          "Please provide your username or your email.",
        "Auth.form.error.email.taken": "Email is already taken.",
        "Auth.form.error.invalid": "Identifier or password invalid.",
        "Auth.form.error.params.provide": "Incorrect params provided.",
        "Auth.form.error.password.format":
          "Your password cannot contain the symbol `$` more than three times.",
        "Auth.form.error.password.local":
          "This user never set a local password, please login via the provider used during account creation.",
        "Auth.form.error.password.matching": "Passwords do not match.",
        "Auth.form.error.password.provide": "Please provide your password.",
        "Auth.form.error.ratelimit":
          "Too many attempts, please try again in a minute.",
        "Auth.form.error.user.not-exist": "This email does not exist.",
        "Auth.form.error.username.taken": "Username is already taken.",
        "Auth.form.firstname.label": "First name",
        "Auth.form.firstname.placeholder": "e.g. Kai",
        "Auth.form.forgot-password.email.label": "Enter your email",
        "Auth.form.forgot-password.email.label.success":
          "Email successfully sent to",
        "Auth.form.lastname.label": "Last name",
        "Auth.form.lastname.placeholder": "e.g. Doe",
        "Auth.form.password.hide-password": "Hide password",
        "Auth.form.password.hint":
          "Must be at least 8 characters, 1 uppercase, 1 lowercase & 1 number",
        "Auth.form.password.show-password": "Show password",
        "Auth.form.register.news.label":
          "Keep me updated about new features & upcoming improvements (by doing this you accept the {terms} and the {policy}).",
        "Auth.form.register.subtitle":
          "Credentials are only used to authenticate in Hyperce. All saved data will be stored in your database.",
        "Auth.form.rememberMe.label": "Remember me",
        "Auth.form.username.label": "Username",
        "Auth.form.username.placeholder": "e.g. Kai_Doe",
        "Auth.form.welcome.subtitle": "Log in to your Hyperce account",
        "Auth.form.welcome.title": "Welcome to Hyperce!",
        "Auth.link.forgot-password": "Forgot your password?",
        "Auth.link.ready": "Ready to sign in?",
        "Auth.link.signin": "Sign in",
        "Auth.link.signin.account": "Already have an account?",
        "Auth.login.sso.divider": "Or login with",
        "Auth.login.sso.loading": "Loading providers...",
        "Auth.login.sso.subtitle": "Login to your account via SSO",
        "Auth.privacy-policy-agreement.policy": "privacy policy",
        "Auth.privacy-policy-agreement.terms": "terms",
        "Auth.reset-password.title": "Reset password",
        "Content Manager": "Content Manager",
        "Content Type Builder": "Content-Types Builder",
        Documentation: "Documentation",
        Email: "Email",
        "Files Upload": "Files Upload",
        "HomePage.helmet.title": "Homepage",
        "HomePage.roadmap": "See our roadmap",
        "HomePage.welcome.congrats": "Congrats!",
        "HomePage.welcome.congrats.content":
          "You are logged in as the first administrator. To discover the powerful features provided by Hyperce,",
        "HomePage.welcome.congrats.content.bold":
          "we recommend you to create your first Collection-Type.",
        "Media Library": "Media Library",
        "New entry": "New entry",
        Password: "Password",
        Provider: "Provider",
        ResetPasswordToken: "Reset Password Token",
        Role: "Role",
        "Roles & Permissions": "Roles & Permissions",
        "Roles.ListPage.notification.delete-all-not-allowed":
          "Some roles could not be deleted since they are associated with users",
        "Roles.ListPage.notification.delete-not-allowed":
          "A role cannot be deleted if associated with users",
        "Roles.RoleRow.select-all": "Select {name} for bulk actions",
        "Roles.RoleRow.user-count":
          "{number, plural, =0 {# user} one {# user} other {# users}}",
        "Roles.components.List.empty.withSearch":
          "There is no role corresponding to the search ({search})...",
        "Settings.PageTitle": "Settings — {name}",
        "Settings.apiTokens.ListView.headers.createdAt": "Created at",
        "Settings.apiTokens.ListView.headers.description": "Description",
        "Settings.apiTokens.ListView.headers.lastUsedAt": "Last used",
        "Settings.apiTokens.ListView.headers.name": "Name",
        "Settings.apiTokens.ListView.headers.type": "Token type",
        "Settings.apiTokens.addFirstToken": "Add your first API Token",
        "Settings.apiTokens.addNewToken": "Add new API Token",
        "Settings.apiTokens.create": "Create new API Token",
        "Settings.apiTokens.createPage.BoundRoute.title": "Bound route to",
        "Settings.apiTokens.createPage.permissions.description":
          "Only actions bound by a route are listed below.",
        "Settings.apiTokens.createPage.permissions.header.hint":
          "Select the application's actions or the plugin's actions and click on the cog icon to display the bound route",
        "Settings.apiTokens.createPage.permissions.header.title":
          "Advanced settings",
        "Settings.apiTokens.createPage.permissions.title": "Permissions",
        "Settings.apiTokens.createPage.title": "Create API Token",
        "Settings.apiTokens.description":
          "List of generated tokens to consume the API",
        "Settings.apiTokens.emptyStateLayout":
          "You don’t have any content yet...",
        "Settings.apiTokens.regenerate": "Regenerate",
        "Settings.apiTokens.title": "API Tokens",
        "Settings.apiTokens.lastHour": "last hour",
        "Settings.application.customization": "Customization",
        "Settings.application.customization.auth-logo.carousel-hint":
          "Replace the logo in the authentication pages",
        "Settings.application.customization.carousel-hint":
          "Change the admin panel logo (Max dimension: {dimension}x{dimension}, Max file size: {size}KB)",
        "Settings.application.customization.carousel-slide.label": "Logo slide",
        "Settings.application.customization.carousel.auth-logo.title":
          "Auth logo",
        "Settings.application.customization.carousel.change-action":
          "Change logo",
        "Settings.application.customization.carousel.menu-logo.title":
          "Menu logo",
        "Settings.application.customization.carousel.reset-action":
          "Reset logo",
        "Settings.application.customization.carousel.title": "Logo",
        "Settings.application.customization.menu-logo.carousel-hint":
          "Replace the logo in the main navigation",
        "Settings.application.customization.modal.cancel": "Cancel",
        "Settings.application.customization.modal.pending": "Pending logo",
        "Settings.application.customization.modal.pending.card-badge": "image",
        "Settings.application.customization.modal.pending.choose-another":
          "Choose another logo",
        "Settings.application.customization.modal.pending.subtitle":
          "Manage the chosen logo before uploading it",
        "Settings.application.customization.modal.pending.title":
          "Logo ready to upload",
        "Settings.application.customization.modal.pending.upload":
          "Upload logo",
        "Settings.application.customization.modal.tab.label":
          "How do you want to upload your assets?",
        "Settings.application.customization.modal.upload": "Upload logo",
        "Settings.application.customization.modal.upload.cta.browse":
          "Browse files",
        "Settings.application.customization.modal.upload.drag-drop":
          "Drag and Drop here or",
        "Settings.application.customization.modal.upload.error-format":
          "Wrong format uploaded (accepted formats only: jpeg, jpg, png, svg).",
        "Settings.application.customization.modal.upload.error-network":
          "Network error",
        "Settings.application.customization.modal.upload.error-size":
          "The file uploaded is too large (max dimension: {dimension}x{dimension}, max file size: {size}KB)",
        "Settings.application.customization.modal.upload.file-validation":
          "Max dimension: {dimension}x{dimension}, Max size: {size}KB",
        "Settings.application.customization.modal.upload.from-computer":
          "From computer",
        "Settings.application.customization.modal.upload.from-url": "From URL",
        "Settings.application.customization.modal.upload.from-url.input-label":
          "URL",
        "Settings.application.customization.modal.upload.next": "Next",
        "Settings.application.customization.size-details":
          "Max dimension: {dimension}×{dimension}, Max file size: {size}KB",
        "Settings.application.description":
          "Administration panel’s global information",
        "Settings.application.edition-title": "current plan",
        "Settings.application.ee-or-ce":
          "{communityEdition, select, true {Community Edition} other {Enterprise Edition}}",
        "Settings.application.ee.admin-seats.add-seats":
          "{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}",
        "Settings.application.ee.admin-seats.at-limit-tooltip":
          "At limit: add seats to invite more users",
        "Settings.application.ee.admin-seats.count":
          "<text>{enforcementUserCount}</text>/{permittedSeats}",
        "Settings.application.get-help": "Get help",
        "Settings.application.link-pricing": "See all pricing plans",
        "Settings.application.link-upgrade": "Upgrade your admin panel",
        "Settings.application.node-version": "node version",
        "Settings.application.strapi-version": "Hyperce version",
        "Settings.application.strapiVersion": "Hyperce version",
        "Settings.application.title": "Overview",
        "Settings.error": "Error",
        "Settings.global": "Global Settings",
        "Settings.permissions": "Administration panel",
        "Settings.permissions.auditLogs.action": "Action",
        "Settings.permissions.auditLogs.admin.auth.success": "Admin login",
        "Settings.permissions.auditLogs.admin.logout": "Admin logout",
        "Settings.permissions.auditLogs.component.create": "Create component",
        "Settings.permissions.auditLogs.component.delete": "Delete component",
        "Settings.permissions.auditLogs.component.update": "Update component",
        "Settings.permissions.auditLogs.content-type.create":
          "Create content type",
        "Settings.permissions.auditLogs.content-type.delete":
          "Delete content type",
        "Settings.permissions.auditLogs.content-type.update":
          "Update content type",
        "Settings.permissions.auditLogs.date": "Date",
        "Settings.permissions.auditLogs.details": "Log Details",
        "Settings.permissions.auditLogs.entry.create":
          "Create entry{model, select, undefined {} other { ({model})}}",
        "Settings.permissions.auditLogs.entry.delete":
          "Delete entry{model, select, undefined {} other { ({model})}}",
        "Settings.permissions.auditLogs.entry.publish":
          "Publish entry {model, select, undefined {} other {({model})}}",
        "Settings.permissions.auditLogs.entry.unpublish":
          "Unpublish entry{model, select, undefined {} other { ({model})}}",
        "Settings.permissions.auditLogs.entry.update":
          "Update entry{model, select, undefined {} other { ({model})}}",
        "Settings.permissions.auditLogs.filters.combobox.aria-label":
          "Search and select an option to filter",
        "Settings.permissions.auditLogs.listview.header.subtitle":
          "Logs of all the activities that happened in your environment",
        "Settings.permissions.auditLogs.media.create": "Create media",
        "Settings.permissions.auditLogs.media.delete": "Delete media",
        "Settings.permissions.auditLogs.media.update": "Update media",
        "Settings.permissions.auditLogs.payload": "Payload",
        "Settings.permissions.auditLogs.permission.create": "Create permission",
        "Settings.permissions.auditLogs.permission.delete": "Delete permission",
        "Settings.permissions.auditLogs.permission.update": "Update permission",
        "Settings.permissions.auditLogs.role.create": "Create role",
        "Settings.permissions.auditLogs.role.delete": "Delete role",
        "Settings.permissions.auditLogs.role.update": "Update role",
        "Settings.permissions.auditLogs.user": "User",
        "Settings.permissions.auditLogs.user.create": "Create user",
        "Settings.permissions.auditLogs.user.delete": "Delete user",
        "Settings.permissions.auditLogs.user.fullname":
          "{firstname} {lastname}",
        "Settings.permissions.auditLogs.user.update": "Update user",
        "Settings.permissions.auditLogs.userId": "User ID",
        "Settings.permissions.category":
          "Permissions settings for the {category}",
        "Settings.permissions.category.plugins":
          "Permissions settings for the {category} plugin",
        "Settings.permissions.conditions.anytime": "Anytime",
        "Settings.permissions.conditions.apply": "Apply",
        "Settings.permissions.conditions.can": "Can",
        "Settings.permissions.conditions.conditions": "Conditions",
        "Settings.permissions.conditions.define-conditions":
          "Define conditions",
        "Settings.permissions.conditions.links": "Links",
        "Settings.permissions.conditions.no-actions":
          "You first need to select actions (create, read, update, ...) before defining conditions on them.",
        "Settings.permissions.conditions.none-selected": "Anytime",
        "Settings.permissions.conditions.or": "OR",
        "Settings.permissions.conditions.when": "When",
        "Settings.permissions.select-all-by-permission":
          "Select all {label} permissions",
        "Settings.permissions.select-by-permission":
          "Select {label} permission",
        "Settings.permissions.users.active": "Active",
        "Settings.permissions.users.create": "Invite new user",
        "Settings.permissions.users.email": "Email",
        "Settings.permissions.users.firstname": "Firstname",
        "Settings.permissions.users.form.sso": "Connect with SSO",
        "Settings.permissions.users.sso.provider.error":
          "An error occurred while requesting the SSO settings",
        "Settings.permissions.users.form.sso.description":
          "When enabled (ON), users can login via SSO",
        "Settings.permissions.users.inactive": "Inactive",
        "Settings.permissions.users.lastname": "Lastname",
        "Settings.permissions.users.listview.header.subtitle":
          "All the users who have access to the Hyperce admin panel",
        "Settings.permissions.users.roles": "Roles",
        "Settings.permissions.users.strapi-author": "Author",
        "Settings.permissions.users.strapi-editor": "Editor",
        "Settings.permissions.users.strapi-super-admin": "Super Admin",
        "Settings.permissions.users.tabs.label": "Tabs Permissions",
        "Settings.permissions.users.user-status": "User status",
        "Settings.permissions.users.username": "Username",
        "Settings.profile.form.notify.data.loaded":
          "Your profile data has been loaded",
        "Settings.profile.form.section.experience.clear.select":
          "Clear the interface language selected",
        "Settings.profile.form.section.experience.here": "here",
        "Settings.profile.form.section.experience.interfaceLanguage":
          "Interface language",
        "Settings.profile.form.section.experience.interfaceLanguage.hint":
          "This will only display your own interface in the chosen language.",
        "Settings.profile.form.section.experience.interfaceLanguageHelp":
          "Preference changes will apply only to you. More information is available {here}.",
        "Settings.profile.form.section.experience.mode.hint":
          "Displays your interface in the chosen mode.",
        "Settings.profile.form.section.experience.mode.label": "Interface mode",
        "Settings.profile.form.section.experience.mode.option-label":
          "{name} mode",
        "Settings.profile.form.section.experience.title": "Experience",
        "Settings.profile.form.section.helmet.title": "User profile",
        "Settings.profile.form.section.profile.page.title": "Profile page",
        "Settings.review-workflows.page.title": "Review Workflows",
        "Settings.review-workflows.page.subtitle":
          "{count, plural, one {# stage} other {# stages}}",
        "Settings.review-workflows.page.isLoading": "Workflow is loading",
        "Settings.review-workflows.page.delete.confirm.body":
          "All entries assigned to deleted stages will be moved to the previous stage. Are you sure you want to save?",
        "Settings.review-workflows.stage.name.label": "Stage name",
        "Settings.roles.create.description":
          "Define the rights given to the role",
        "Settings.roles.create.title": "Create a role",
        "Settings.roles.created": "Role created",
        "Settings.roles.edit.title": "Edit a role",
        "Settings.roles.form.button.users-with-role":
          "{number, plural, =0 {# users} one {# user} other {# users}} with this role",
        "Settings.roles.form.created": "Created",
        "Settings.roles.form.description": "Name and description of the role",
        "Settings.roles.form.permission.property-label": "{label} permissions",
        "Settings.roles.form.permissions.attributesPermissions":
          "Fields permissions",
        "Settings.roles.form.permissions.create": "Create",
        "Settings.roles.form.permissions.delete": "Delete",
        "Settings.roles.form.permissions.publish": "Publish",
        "Settings.roles.form.permissions.read": "Read",
        "Settings.roles.form.permissions.update": "Update",
        "Settings.roles.list.button.add": "Add new role",
        "Settings.roles.list.description": "List of roles",
        "Settings.roles.title.singular": "role",
        "Settings.sso.description":
          "Configure the settings for the Single Sign-On feature.",
        "Settings.sso.form.defaultRole.description":
          "It will attach the new authenticated user to the selected role",
        "Settings.sso.form.defaultRole.description-not-allowed":
          "You need to have the permission to read the admin roles",
        "Settings.sso.form.defaultRole.label": "Default role",
        "Settings.sso.form.localAuthenticationLock.label":
          "Local authentication lock-out",
        "Settings.sso.form.localAuthenticationLock.description":
          "Select the roles for which you want to disable the local authentication",
        "Settings.sso.form.registration.description":
          "Create new user on SSO login if no account exists",
        "Settings.sso.form.registration.label": "Auto-registration",
        "Settings.sso.title": "Single Sign-On",
        "Settings.tokens.Button.cancel": "Cancel",
        "Settings.tokens.Button.regenerate": "Regenerate",
        "Settings.tokens.ListView.headers.createdAt": "Created at",
        "Settings.tokens.ListView.headers.description": "Description",
        "Settings.tokens.ListView.headers.lastUsedAt": "Last used",
        "Settings.tokens.ListView.headers.name": "Name",
        "Settings.tokens.RegenerateDialog.title": "Regenerate token",
        "Settings.tokens.copy.editMessage":
          "For security reasons, you can only see your token once.",
        "Settings.tokens.copy.editTitle":
          "This token isn’t accessible anymore.",
        "Settings.tokens.copy.lastWarning":
          "Make sure to copy this token, you won’t be able to see it again!",
        "Settings.tokens.duration.30-days": "30 days",
        "Settings.tokens.duration.7-days": "7 days",
        "Settings.tokens.duration.90-days": "90 days",
        "Settings.tokens.duration.expiration-date": "Expiration date",
        "Settings.tokens.duration.unlimited": "Unlimited",
        "Settings.tokens.form.description": "Description",
        "Settings.tokens.form.duration": "Token duration",
        "Settings.tokens.form.name": "Name",
        "Settings.tokens.form.type": "Token type",
        "Settings.tokens.notification.copied": "Token copied to clipboard.",
        "Settings.tokens.popUpWarning.message":
          "Are you sure you want to regenerate this token?",
        "Settings.tokens.regenerate": "Regenerate",
        "Settings.tokens.types.custom": "Custom",
        "Settings.tokens.types.full-access": "Full access",
        "Settings.tokens.types.read-only": "Read-only",
        "Settings.transferTokens.ListView.headers.type": "Token type",
        "Settings.transferTokens.addFirstToken":
          "Add your first Transfer Token",
        "Settings.transferTokens.addNewToken": "Add new Transfer Token",
        "Settings.transferTokens.create": "Create new Transfer Token",
        "Settings.transferTokens.createPage.title": "Create Transfer Token",
        "Settings.transferTokens.description":
          "List of generated transfer tokens",
        "Settings.transferTokens.emptyStateLayout":
          "You don’t have any content yet...",
        "Settings.transferTokens.title": "Transfer Tokens",
        "Settings.webhooks.create": "Create a webhook",
        "Settings.webhooks.create.header": "Create new header",
        "Settings.webhooks.created": "Webhook created",
        "Settings.webhooks.event.publish-tooltip":
          "This event only exists for contents with Draft/Publish system enabled",
        "Settings.webhooks.event.select": "Select event",
        "Settings.webhooks.events.isLoading": "Events loading",
        "Settings.webhooks.events.create": "Create",
        "Settings.webhooks.events.update": "Update",
        "Settings.webhooks.events.delete": "Delete webhook",
        "Settings.webhooks.form.events": "Events",
        "Settings.webhooks.form.headers": "Headers",
        "Settings.webhooks.form.url": "URL",
        "Settings.webhooks.headers.remove": "Remove header row {number}",
        "Settings.webhooks.key": "Key",
        "Settings.webhooks.list.button.add": "Create new webhook",
        "Settings.webhooks.list.description": "Get POST changes notifications",
        "Settings.webhooks.list.empty.description": "No webhooks found",
        "Settings.webhooks.list.empty.link": "See our documentation",
        "Settings.webhooks.list.empty.title": "There are no webhooks yet",
        "Settings.webhooks.list.th.actions": "actions",
        "Settings.webhooks.list.th.status": "status",
        "Settings.webhooks.list.loading.success": "Webhooks have been loaded",
        "Settings.webhooks.singular": "webhook",
        "Settings.webhooks.title": "Webhooks",
        "Settings.webhooks.to.delete":
          "{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected",
        "Settings.webhooks.trigger": "Trigger",
        "Settings.webhooks.trigger.cancel": "Cancel trigger",
        "Settings.webhooks.trigger.pending": "Pending…",
        "Settings.webhooks.trigger.save": "Please save to trigger",
        "Settings.webhooks.trigger.success": "Success!",
        "Settings.webhooks.trigger.success.label": "Trigger succeeded",
        "Settings.webhooks.trigger.test": "Test-trigger",
        "Settings.webhooks.trigger.title": "Save before Trigger",
        "Settings.webhooks.value": "Value",
        "Settings.webhooks.validation.name.required": "Name is required",
        "Settings.webhooks.validation.name.regex":
          "The name must start with a letter and only contain letters, numbers, spaces and underscores",
        "Settings.webhooks.validation.url.required": "Url is required",
        "Settings.webhooks.validation.url.regex":
          "The value must be a valid Url",
        "Settings.webhooks.validation.key": "Key is required",
        "Settings.webhooks.validation.value": "Value is required",
        "Usecase.back-end": "Back-end developer",
        "Usecase.button.skip": "Skip this question",
        "Usecase.content-creator": "Content Creator",
        "Usecase.front-end": "Front-end developer",
        "Usecase.full-stack": "Full-stack developer",
        "Usecase.input.work-type": "What type of work do you do?",
        "Usecase.notification.success.project-created":
          "Project has been successfully created",
        "Usecase.other": "Other",
        "Usecase.title": "Tell us a bit more about yourself",
        Username: "Username",
        "Users & Permissions": "Users & Permissions",
        Users: "Users",
        "Users.components.List.empty": "There is no users...",
        "Users.components.List.empty.withFilters":
          "There is no users with the applied filters...",
        "Users.components.List.empty.withSearch":
          "There is no users corresponding to the search ({search})...",
        "admin.pages.MarketPlacePage.sort.label": "Sort by",
        "admin.pages.MarketPlacePage.filters.categories": "Categories",
        "admin.pages.MarketPlacePage.filters.categoriesSelected":
          "{count, plural, =0 {No categories} one {# category} other {# categories}} selected",
        "admin.pages.MarketPlacePage.filters.collections": "Collections",
        "admin.pages.MarketPlacePage.filters.collectionsSelected":
          "{count, plural, =0 {No Collections} one {# Collection} other {# Collections}} selected",
        "admin.pages.MarketPlacePage.helmet": "Marketplace — Plugins",
        "admin.pages.MarketPlacePage.missingPlugin.description":
          "Tell us what plugin you are looking for and we'll let our community plugin developers know in case they are in search for inspiration!",
        "admin.pages.MarketPlacePage.missingPlugin.title": "Missing a plugin?",
        "admin.pages.MarketPlacePage.offline.subtitle":
          "You need to be connected to the Internet to access Hyperce Market.",
        "admin.pages.MarketPlacePage.offline.title": "You are offline",
        "admin.pages.MarketPlacePage.plugin.copy": "Copy install command",
        "admin.pages.MarketPlacePage.plugin.copy.success":
          "Install command ready to be pasted in your terminal",
        "admin.pages.MarketPlacePage.plugin.downloads":
          "This plugin has {downloadsCount} weekly downloads",
        "admin.pages.MarketPlacePage.plugin.githubStars":
          "This plugin was starred {starsCount} on GitHub",
        "admin.pages.MarketPlacePage.plugin.info": "Learn more",
        "admin.pages.MarketPlacePage.plugin.info.label":
          "Learn more about {pluginName}",
        "admin.pages.MarketPlacePage.plugin.info.text": "More",
        "admin.pages.MarketPlacePage.plugin.installed": "Installed",
        "admin.pages.MarketPlacePage.plugin.tooltip.madeByStrapi":
          "Made by Hyperce",
        "admin.pages.MarketPlacePage.plugin.tooltip.verified":
          "Plugin verified by Hyperce",
        "admin.pages.MarketPlacePage.plugin.version":
          'Update your Hyperce version: "{strapiAppVersion}" to: "{versionRange}"',
        "admin.pages.MarketPlacePage.plugin.version.null":
          'Unable to verify compatibility with your Hyperce version: "{strapiAppVersion}"',
        "admin.pages.MarketPlacePage.plugins": "Plugins",
        "admin.pages.MarketPlacePage.provider.downloads":
          "This provider has {downloadsCount} weekly downloads",
        "admin.pages.MarketPlacePage.provider.githubStars":
          "This provider was starred {starsCount} on GitHub",
        "admin.pages.MarketPlacePage.providers": "Providers",
        "admin.pages.MarketPlacePage.search.clear": "Clear the search",
        "admin.pages.MarketPlacePage.search.empty": 'No result for "{target}"',
        "admin.pages.MarketPlacePage.search.placeholder": "Search",
        "admin.pages.MarketPlacePage.sort.alphabetical": "Alphabetical order",
        "admin.pages.MarketPlacePage.sort.alphabetical.selected":
          "Sort by alphabetical order",
        "admin.pages.MarketPlacePage.sort.githubStars":
          "Number of GitHub stars",
        "admin.pages.MarketPlacePage.sort.githubStars.selected":
          "Sort by GitHub stars",
        "admin.pages.MarketPlacePage.sort.newest": "Newest",
        "admin.pages.MarketPlacePage.sort.newest.selected": "Sort by newest",
        "admin.pages.MarketPlacePage.sort.npmDownloads": "Number of downloads",
        "admin.pages.MarketPlacePage.sort.npmDownloads.selected":
          "Sort by npm downloads",
        "admin.pages.MarketPlacePage.submit.plugin.link": "Submit plugin",
        "admin.pages.MarketPlacePage.submit.provider.link": "Submit provider",
        "admin.pages.MarketPlacePage.subtitle": "Get more out of Hyperce",
        "admin.pages.MarketPlacePage.tab-group.label":
          "Plugins and Providers for Hyperce",
        anErrorOccurred: "Woops! Something went wrong. Please, try again.",
        "app.component.CopyToClipboard.label": "Copy to clipboard",
        "app.component.search.label": "Search for {target}",
        "app.component.table.duplicate": "Duplicate {target}",
        "app.component.table.edit": "Edit {target}",
        "app.component.table.read": "Read {target}",
        "app.component.table.select.one-entry": "Select {target}",
        "app.component.table.view": "{target} details",
        "app.components.Button.cancel": "Cancel",
        "app.components.Button.confirm": "Confirm",
        "app.components.Button.reset": "Reset",
        "app.components.ComingSoonPage.comingSoon": "Coming soon",
        "app.components.ConfirmDialog.title": "Confirmation",
        "app.components.DownloadInfo.download": "Download in progress...",
        "app.components.DownloadInfo.text":
          "This could take a minute. Thanks for your patience.",
        "app.components.EmptyAttributes.title": "There are no fields yet",
        "app.components.EmptyStateLayout.content-document": "No content found",
        "app.components.EmptyStateLayout.content-permissions":
          "You don't have the permissions to access that content",
        "app.components.GuidedTour.CM.create.content":
          "<p>Create and manage all the content here in the Content Manager.</p><p>Ex: Taking the Blog website example further, one can write an Article, save and publish it as they like.</p><p>💡 Quick tip — Don't forget to hit publish on the content you create.</p>",
        "app.components.GuidedTour.CM.create.title": "⚡️ Create content",
        "app.components.GuidedTour.CM.success.content":
          "<p>Awesome, one last step to go!</p><b>🚀 See content in action</b>",
        "app.components.GuidedTour.CM.success.cta.title": "Test the API",
        "app.components.GuidedTour.CM.success.title": "Step 2: Completed ✅",
        "app.components.GuidedTour.CTB.create.content":
          "<p>Collection Types help you manage several entries, Single Types are suitable to manage only one entry.</p> <p>Ex: For a Blog website, Articles would be a Collection Type whereas a Homepage would be a Single Type.</p>",
        "app.components.GuidedTour.CTB.create.cta.title":
          "Build a Collection Type",
        "app.components.GuidedTour.CTB.create.title":
          "🧠 Create a first Collection Type",
        "app.components.GuidedTour.CTB.success.content":
          "<p>Good going!</p><b>⚡️ What would you like to share with the world?</b>",
        "app.components.GuidedTour.CTB.success.title": "Step 1: Completed ✅",
        "app.components.GuidedTour.apiTokens.create.content":
          "<p>Generate an authentication token here and retrieve the content you just created.</p>",
        "app.components.GuidedTour.apiTokens.create.cta.title":
          "Generate an API Token",
        "app.components.GuidedTour.apiTokens.create.title":
          "🚀 See content in action",
        "app.components.GuidedTour.apiTokens.success.content":
          "<p>See content in action by making an HTTP request:</p><ul><li><p>To this URL: <light>https://'<'YOUR_DOMAIN'>'/api/'<'YOUR_CT'>'</light></p></li><li><p>With the header: <light>Authorization: bearer '<'YOUR_API_TOKEN'>'</light></p></li></ul><p>For more ways to interact with content, see the <documentationLink>documentation</documentationLink>.</p>",
        "app.components.GuidedTour.apiTokens.success.cta.title":
          "Go back to homepage",
        "app.components.GuidedTour.apiTokens.success.title":
          "Step 3: Completed ✅",
        "app.components.GuidedTour.create-content": "Create content",
        "app.components.GuidedTour.home.CM.title":
          "⚡️ What would you like to share with the world?",
        "app.components.GuidedTour.home.CTB.cta.title":
          "Go to the Content type Builder",
        "app.components.GuidedTour.home.CTB.title":
          "🧠 Build the content structure",
        "app.components.GuidedTour.home.apiTokens.cta.title": "Test the API",
        "app.components.GuidedTour.skip": "Skip the tour",
        "app.components.GuidedTour.title": "3 steps to get started",
        "app.components.HomePage.button.blog": "See more on the blog",
        "app.components.HomePage.community": "Join the community",
        "app.components.HomePage.community.content":
          "Discuss with team members, contributors and developers on different channels.",
        "app.components.HomePage.create": "Create your first Content type",
        "app.components.HomePage.roadmap": "See our roadmap",
        "app.components.HomePage.welcome": "Welcome on board 👋",
        "app.components.HomePage.welcome.again": "Welcome 👋",
        "app.components.HomePage.welcomeBlock.content":
          "Congrats! You are logged as the first administrator. To discover the powerful features provided by Hyperce, we recommend you to create your first Content type!",
        "app.components.HomePage.welcomeBlock.content.again":
          "We hope you are making progress on your project! Feel free to read the latest news about Hyperce. We are giving our best to improve the product based on your feedback.",
        "app.components.HomePage.welcomeBlock.content.issues": "issues.",
        "app.components.HomePage.welcomeBlock.content.raise": " or raise ",
        "app.components.ImgPreview.hint":
          "Drag & drop your file into this area or {browse} for a file to upload",
        "app.components.ImgPreview.hint.browse": "browse",
        "app.components.InputFile.newFile": "Add new file",
        "app.components.InputFileDetails.open": "Open in a new tab",
        "app.components.InputFileDetails.originalName": "Original name:",
        "app.components.InputFileDetails.remove": "Remove this file",
        "app.components.InputFileDetails.size": "Size:",
        "app.components.InstallPluginPage.Download.description":
          "It might take a few seconds to download and install the plugin.",
        "app.components.InstallPluginPage.Download.title": "Downloading...",
        "app.components.InstallPluginPage.description":
          "Extend your app effortlessly.",
        "app.components.LeftMenu.collapse": "Collapse the navbar",
        "app.components.LeftMenu.expand": "Expand the navbar",
        "app.components.LeftMenu.general": "General",
        "app.components.LeftMenu.logo.alt": "Application logo",
        "app.components.LeftMenu.logout": "Logout",
        "app.components.LeftMenu.navbrand.title": "Hyperce Dashboard",
        "app.components.LeftMenu.navbrand.workplace": "Workplace",
        "app.components.LeftMenu.plugins": "Plugins",
        "app.components.LeftMenuFooter.help": "Help",
        "app.components.LeftMenuFooter.poweredBy": "Powered by ",
        "app.components.LeftMenuLinkContainer.collectionTypes":
          "Collection Types",
        "app.components.LeftMenuLinkContainer.configuration": "Configurations",
        "app.components.LeftMenuLinkContainer.general": "General",
        "app.components.LeftMenuLinkContainer.noPluginsInstalled":
          "No plugins installed yet",
        "app.components.LeftMenuLinkContainer.plugins": "Plugins",
        "app.components.LeftMenuLinkContainer.singleTypes": "Single Types",
        "app.components.ListPluginsPage.deletePlugin.description":
          "It might take a few seconds to uninstall the plugin.",
        "app.components.ListPluginsPage.deletePlugin.title": "Uninstalling",
        "app.components.ListPluginsPage.description":
          "List of the installed plugins in the project.",
        "app.components.ListPluginsPage.helmet.title": "List plugins",
        "app.components.Logout.logout": "Logout",
        "app.components.Logout.profile": "Profile",
        "app.components.MarketplaceBanner":
          "Discover plugins built by the community, and many more awesome things to kickstart your project, on Hyperce Marketplace.",
        "app.components.MarketplaceBanner.image.alt": "A Hyperce rocket logo",
        "app.components.MarketplaceBanner.link": "Check it out now",
        "app.components.NotFoundPage.back": "Back to homepage",
        "app.components.NotFoundPage.description": "Not Found",
        "app.components.NpsSurvey.banner-title":
          "How likely are you to recommend Hyperce to a friend or colleague?",
        "app.components.NpsSurvey.feedback-response":
          "Thank you very much for your feedback!",
        "app.components.NpsSurvey.feedback-question":
          "Do you have any suggestion for improvements?",
        "app.components.NpsSurvey.submit-feedback": "Submit Feedback",
        "app.components.NpsSurvey.dismiss-survey-label": "Dismiss survey",
        "app.components.NpsSurvey.no-recommendation": "Not at all likely",
        "app.components.NpsSurvey.happy-to-recommend": "Extremely likely",
        "app.components.Official": "Official",
        "app.components.Onboarding.help.button": "Help button",
        "app.components.Onboarding.label.completed": "% completed",
        "app.components.Onboarding.link.build-content":
          "Build a content architecture",
        "app.components.Onboarding.link.manage-content": "Add & manage content",
        "app.components.Onboarding.link.manage-media": "Manage media",
        "app.components.Onboarding.link.more-videos": "Watch more videos",
        "app.components.Onboarding.title": "Get Started Videos",
        "app.components.PluginCard.Button.label.download": "Download",
        "app.components.PluginCard.Button.label.install": "Already installed",
        "app.components.PluginCard.PopUpWarning.install.impossible.autoReload.needed":
          "The autoReload feature needs to be enabled. Please start your app with `yarn develop`.",
        "app.components.PluginCard.PopUpWarning.install.impossible.confirm":
          "I understand!",
        "app.components.PluginCard.PopUpWarning.install.impossible.environment":
          "For security reasons, a plugin can only be downloaded in a development environment.",
        "app.components.PluginCard.PopUpWarning.install.impossible.title":
          "Downloading is impossible",
        "app.components.PluginCard.compatible": "Compatible with your app",
        "app.components.PluginCard.compatibleCommunity":
          "Compatible with the community",
        "app.components.PluginCard.more-details": "More details",
        "app.components.ToggleCheckbox.off-label": "False",
        "app.components.ToggleCheckbox.on-label": "True",
        "app.components.Users.MagicLink.connect":
          "Copy and share this link to give access to this user",
        "app.components.Users.MagicLink.connect.sso":
          "Send this link to the user, the first login can be made via a SSO provider",
        "app.components.Users.ModalCreateBody.block-title.details":
          "User details",
        "app.components.Users.ModalCreateBody.block-title.roles":
          "User's roles",
        "app.components.Users.ModalCreateBody.block-title.roles.description":
          "A user can have one or several roles",
        "app.components.Users.SortPicker.button-label": "Sort by",
        "app.components.Users.SortPicker.sortby.email_asc": "Email (A to Z)",
        "app.components.Users.SortPicker.sortby.email_desc": "Email (Z to A)",
        "app.components.Users.SortPicker.sortby.firstname_asc":
          "First name (A to Z)",
        "app.components.Users.SortPicker.sortby.firstname_desc":
          "First name (Z to A)",
        "app.components.Users.SortPicker.sortby.lastname_asc":
          "Last name (A to Z)",
        "app.components.Users.SortPicker.sortby.lastname_desc":
          "Last name (Z to A)",
        "app.components.Users.SortPicker.sortby.username_asc":
          "Username (A to Z)",
        "app.components.Users.SortPicker.sortby.username_desc":
          "Username (Z to A)",
        "app.components.listPlugins.button": "Add New Plugin",
        "app.components.listPlugins.title.none": "No plugins installed",
        "app.components.listPluginsPage.deletePlugin.error":
          "An error occurred while uninstalling the plugin",
        "app.containers.App.notification.error.init":
          "An error occurred while requesting the API",
        "app.containers.AuthPage.ForgotPasswordSuccess.text.contact-admin":
          "If you do not receive this link, please contact your administrator.",
        "app.containers.AuthPage.ForgotPasswordSuccess.text.email":
          "It can take a few minutes to receive your password recovery link.",
        "app.containers.AuthPage.ForgotPasswordSuccess.title": "Email sent",
        "app.containers.Users.EditPage.form.active.label": "Active",
        "app.containers.Users.EditPage.header.label": "Edit {name}",
        "app.containers.Users.EditPage.header.label-loading": "Edit user",
        "app.containers.Users.EditPage.roles-bloc-title": "Attributed roles",
        "app.containers.Users.ModalForm.footer.button-success": "Invite user",
        "app.links.configure-view": "Configure the view",
        "app.page.not.found":
          "Oops! We can't seem to find the page you're looking for...",
        "app.static.links.cheatsheet": "CheatSheet",
        "app.utils.SelectOption.defaultMessage": " ",
        "app.utils.add-filter": "Add filter",
        "app.utils.close-label": "Close",
        "app.utils.defaultMessage": " ",
        "app.utils.delete": "Delete",
        "app.utils.duplicate": "Duplicate",
        "app.utils.edit": "Edit",
        "app.utils.errors.file-too-big.message": "The file is too big",
        "app.utils.filter-value": "Filter value",
        "app.utils.filters": "Filters",
        "app.utils.notify.data-loaded": "The {target} has loaded",
        "app.utils.placeholder.defaultMessage": " ",
        "app.utils.publish": "Publish",
        "app.utils.refresh": "Refresh",
        "app.utils.select-all": "Select all",
        "app.utils.select-field": "Select field",
        "app.utils.select-filter": "Select filter",
        "app.utils.unpublish": "Unpublish",
        "app.utils.published": "Published",
        "app.utils.ready-to-publish": "Ready to publish",
        clearLabel: "Clear",
        "coming.soon":
          "This content is currently under construction and will be back in a few weeks!",
        "component.Input.error.validation.integer":
          "The value must be an integer",
        "components.AutoReloadBlocker.description":
          "Run Hyperce with one of the following commands:",
        "components.AutoReloadBlocker.header":
          "Reload feature is required for this plugin.",
        "components.ErrorBoundary.title": "Something went wrong...",
        "components.FilterOptions.FILTER_TYPES.$contains": "contains",
        "components.FilterOptions.FILTER_TYPES.$containsi":
          "contains (case insensitive)",
        "components.FilterOptions.FILTER_TYPES.$endsWith": "ends with",
        "components.FilterOptions.FILTER_TYPES.$endsWithi":
          "ends with (case insensitive)",
        "components.FilterOptions.FILTER_TYPES.$eq": "is",
        "components.FilterOptions.FILTER_TYPES.$eqi": "is (case insensitive)",
        "components.FilterOptions.FILTER_TYPES.$gt": "is greater than",
        "components.FilterOptions.FILTER_TYPES.$gte":
          "is greater than or equal to",
        "components.FilterOptions.FILTER_TYPES.$lt": "is lower than",
        "components.FilterOptions.FILTER_TYPES.$lte":
          "is lower than or equal to",
        "components.FilterOptions.FILTER_TYPES.$ne": "is not",
        "components.FilterOptions.FILTER_TYPES.$nei":
          "is not (case insensitive)",
        "components.FilterOptions.FILTER_TYPES.$notContains":
          "does not contain",
        "components.FilterOptions.FILTER_TYPES.$notContainsi":
          "does not contain (case insensitive)",
        "components.FilterOptions.FILTER_TYPES.$notNull": "is not null",
        "components.FilterOptions.FILTER_TYPES.$null": "is null",
        "components.FilterOptions.FILTER_TYPES.$startsWith": "starts with",
        "components.FilterOptions.FILTER_TYPES.$startsWithi":
          "starts with (case insensitive)",
        "components.Input.error.attribute.key.taken":
          "This value already exists",
        "components.Input.error.attribute.sameKeyAndName": "Can't be equal",
        "components.Input.error.attribute.taken":
          "This field name already exists",
        "components.Input.error.contain.lowercase":
          "Password must contain at least one lowercase character",
        "components.Input.error.contain.number":
          "Password must contain at least one number",
        "components.Input.error.contain.uppercase":
          "Password must contain at least one uppercase character",
        "components.Input.error.contentTypeName.taken":
          "This name already exists",
        "components.Input.error.custom-error": "{errorMessage} ",
        "components.Input.error.password.noMatch": "Passwords do not match",
        "components.Input.error.validation.email": "This is an invalid email",
        "components.Input.error.validation.json":
          "This doesn't match the JSON format",
        "components.Input.error.validation.lowercase":
          "The value must be a lowercase string",
        "components.Input.error.validation.max":
          "The value is too high (max: {max}).",
        "components.Input.error.validation.maxLength":
          "The value is too long (max: {max}).",
        "components.Input.error.validation.min":
          "The value is too low (min: {min}).",
        "components.Input.error.validation.minLength":
          "The value is too short (min: {min}).",
        "components.Input.error.validation.minSupMax": "Can't be superior",
        "components.Input.error.validation.regex":
          "The value does not match the regex.",
        "components.Input.error.validation.required": "This value is required.",
        "components.Input.error.validation.unique":
          "This value is already used.",
        "components.Input.error.validation.email.withField":
          "{field} is an invalid email",
        "components.Input.error.validation.json.withField":
          "{field} doesn't match the JSON format",
        "components.Input.error.validation.lowercase.withField":
          "{field} must be a lowercase string",
        "components.Input.error.validation.max.withField":
          "{field} is too high.",
        "components.Input.error.validation.maxLength.withField":
          "{field} is too long.",
        "components.Input.error.validation.min.withField":
          "{field} is too low.",
        "components.Input.error.validation.minLength.withField":
          "{field} is too short.",
        "components.Input.error.validation.minSupMax.withField":
          "{field} can't be superior",
        "components.Input.error.validation.regex.withField":
          "{field} does not match the regex.",
        "components.Input.error.validation.required.withField":
          "{field} is required.",
        "components.Input.error.validation.unique.withField":
          "{field} is already used.",
        "components.InputSelect.option.placeholder": "Choose here",
        "components.ListRow.empty": "There is no data to be shown.",
        "components.NotAllowedInput.text": "No permissions to see this field",
        "components.OverlayBlocker.description":
          "You're using a feature that needs the server to restart. Please wait until the server is up.",
        "components.OverlayBlocker.description.serverError":
          "The server should have restarted, please check your logs in the terminal.",
        "components.OverlayBlocker.title": "Waiting for restart...",
        "components.OverlayBlocker.title.serverError":
          "The restart is taking longer than expected",
        "components.PageFooter.select": "Entries per page",
        "components.ProductionBlocker.description":
          "For safety purposes we have to disable this plugin in other environments.",
        "components.ProductionBlocker.header":
          "This plugin is only available in development.",
        "components.ViewSettings.tooltip": "View settings",
        "components.TableHeader.sort": "Sort on {label}",
        "components.Wysiwyg.ToggleMode.markdown-mode": "Markdown mode",
        "components.Wysiwyg.ToggleMode.preview-mode": "Preview mode",
        "components.Wysiwyg.collapse": "Collapse",
        "components.Wysiwyg.selectOptions.H1": "Title H1",
        "components.Wysiwyg.selectOptions.H2": "Title H2",
        "components.Wysiwyg.selectOptions.H3": "Title H3",
        "components.Wysiwyg.selectOptions.H4": "Title H4",
        "components.Wysiwyg.selectOptions.H5": "Title H5",
        "components.Wysiwyg.selectOptions.H6": "Title H6",
        "components.Wysiwyg.selectOptions.title": "Add a title",
        "components.WysiwygBottomControls.charactersIndicators": "characters",
        "components.WysiwygBottomControls.fullscreen": "Expand",
        "components.WysiwygBottomControls.uploadFiles":
          "Drag & drop files, paste from the clipboard or {browse}.",
        "components.WysiwygBottomControls.uploadFiles.browse": "select them",
        "components.pagination.go-to": "Go to page {page}",
        "components.pagination.go-to-next": "Go to next page",
        "components.pagination.go-to-previous": "Go to previous page",
        "components.pagination.remaining-links": "And {number} other links",
        "components.popUpWarning.button.cancel": "No, cancel",
        "components.popUpWarning.button.confirm": "Yes, confirm",
        "components.popUpWarning.message":
          "Are you sure you want to delete this?",
        "components.popUpWarning.title": "Please confirm",
        "content-manager.App.schemas.data-loaded":
          "The schemas have been successfully loaded",
        "content-manager.ListViewTable.relation-loaded":
          "Relations have been loaded",
        "content-manager.ListViewTable.relation-loading":
          "Relations are loading",
        "content-manager.ListViewTable.relation-more":
          "This relation contains more entities than displayed",
        "content-manager.EditRelations.title": "Relational data",
        "content-manager.HeaderLayout.button.label-add-entry":
          "Create new entry",
        "content-manager.api.id": "API ID",
        "content-manager.apiError.This attribute must be unique":
          "{field} must be unique",
        "content-manager.components.AddFilterCTA.add": "Filters",
        "content-manager.components.AddFilterCTA.hide": "Filters",
        "content-manager.components.DragHandle-label": "Drag",
        "content-manager.components.DraggableAttr.edit": "Click to edit",
        "content-manager.components.DraggableCard.delete.field":
          "Delete {item}",
        "content-manager.components.DraggableCard.edit.field": "Edit {item}",
        "content-manager.components.DraggableCard.move.field": "Move {item}",
        "content-manager.components.ListViewTable.row-line":
          "item line {number}",
        "content-manager.components.DynamicZone.ComponentPicker-label":
          "Pick one component",
        "content-manager.components.DynamicZone.add-component":
          "Add a component to {componentName}",
        "content-manager.components.DynamicZone.delete-label": "Delete {name}",
        "content-manager.components.DynamicZone.error-message":
          "The component contains error(s)",
        "content-manager.components.DynamicZone.missing-components":
          "There {number, plural, =0 {are # missing components} one {is # missing component} other {are # missing components}}",
        "content-manager.components.DynamicZone.move-down-label":
          "Move component down",
        "content-manager.components.DynamicZone.move-up-label":
          "Move component up",
        "content-manager.components.DynamicZone.pick-compo":
          "Pick one component",
        "content-manager.components.DynamicZone.required":
          "Component is required",
        "content-manager.components.EmptyAttributesBlock.button":
          "Go to settings page",
        "content-manager.components.EmptyAttributesBlock.description":
          "You can change your settings",
        "content-manager.components.FieldItem.linkToComponentLayout":
          "Set the component's layout",
        "content-manager.components.FieldSelect.label": "Add a field",
        "content-manager.components.FilterOptions.button.apply": "Apply",
        "content-manager.components.FiltersPickWrapper.PluginHeader.actions.apply":
          "Apply",
        "content-manager.components.FiltersPickWrapper.PluginHeader.actions.clearAll":
          "Clear all",
        "content-manager.components.FiltersPickWrapper.PluginHeader.description":
          "Set the conditions to apply to filter the entries",
        "content-manager.components.FiltersPickWrapper.PluginHeader.title.filter":
          "Filters",
        "content-manager.components.FiltersPickWrapper.hide": "Hide",
        "content-manager.components.Filters.usersSelect.label":
          "Search and select a user to filter by",
        "content-manager.components.LeftMenu.Search.label":
          "Search for a content type",
        "content-manager.components.LeftMenu.collection-types":
          "Collection Types",
        "content-manager.components.LeftMenu.single-types": "Single Types",
        "content-manager.components.LimitSelect.itemsPerPage": "Items per page",
        "content-manager.components.NotAllowedInput.text":
          "No permissions to see this field",
        "content-manager.components.RelationInput.icon-button-aria-label":
          "Drag",
        "content-manager.components.RepeatableComponent.error-message":
          "The component(s) contain error(s)",
        "content-manager.components.Search.placeholder":
          "Search for an entry...",
        "content-manager.components.Select.draft-info-title": "State: Draft",
        "content-manager.components.Select.publish-info-title":
          "State: Published",
        "content-manager.components.SettingsViewWrapper.pluginHeader.description.edit-settings":
          "Customize how the edit view will look like.",
        "content-manager.components.SettingsViewWrapper.pluginHeader.description.list-settings":
          "Define the settings of the list view.",
        "content-manager.components.SettingsViewWrapper.pluginHeader.title":
          "Configure the view — {name}",
        "content-manager.bulk-publish.already-published": "Already Published",
        "content-manager.components.TableDelete.delete": "Delete all",
        "content-manager.components.TableDelete.deleteSelected":
          "Delete selected",
        "content-manager.components.TableDelete.label":
          "{number, plural, one {# entry} other {# entries}} selected",
        "content-manager.components.TableEmpty.withFilters":
          "There are no {contentType} with the applied filters...",
        "content-manager.components.TableEmpty.withSearch":
          "There are no {contentType} corresponding to the search ({search})...",
        "content-manager.components.TableEmpty.withoutFilter":
          "There are no {contentType}...",
        "content-manager.components.empty-repeatable":
          "No entry yet. Click on the button below to add one.",
        "content-manager.components.notification.info.maximum-requirement":
          "You have already reached the maximum number of fields",
        "content-manager.components.notification.info.minimum-requirement":
          "A field has been added to match the minimum requirement",
        "content-manager.components.repeatable.reorder.error":
          "An error occurred while reordering your component's field, please try again",
        "content-manager.components.reset-entry": "Reset entry",
        "content-manager.components.uid.apply": "apply",
        "content-manager.components.uid.available": "Available",
        "content-manager.components.uid.regenerate": "Regenerate",
        "content-manager.components.uid.suggested": "suggested",
        "content-manager.components.uid.unavailable": "Unavailable",
        "content-manager.containers.Edit.Link.Layout": "Configure the layout",
        "content-manager.containers.Edit.Link.Model":
          "Edit the Collection-Type",
        "content-manager.containers.Edit.addAnItem": "Add an item...",
        "content-manager.containers.Edit.clickToJump":
          "Click to jump to the entry",
        "content-manager.containers.Edit.delete": "Delete",
        "content-manager.containers.Edit.delete-entry": "Delete this entry",
        "content-manager.containers.Edit.editing": "Editing...",
        "content-manager.containers.Edit.information": "Information",
        "content-manager.containers.Edit.information.by": "By",
        "content-manager.containers.Edit.information.created": "Created",
        "content-manager.containers.Edit.information.draftVersion":
          "draft version",
        "content-manager.containers.Edit.information.editing": "Editing",
        "content-manager.containers.Edit.information.lastUpdate": "Last update",
        "content-manager.containers.Edit.information.publishedVersion":
          "published version",
        "content-manager.containers.Edit.pluginHeader.title.new":
          "Create an entry",
        "content-manager.containers.Edit.reset": "Reset",
        "content-manager.containers.Edit.returnList": "Return to list",
        "content-manager.containers.Edit.seeDetails": "Details",
        "content-manager.containers.Edit.submit": "Save",
        "content-manager.containers.EditSettingsView.modal-form.edit-field":
          "Edit the field",
        "content-manager.containers.EditView.add.new-entry": "Add an entry",
        "content-manager.containers.EditView.notification.errors":
          "The form contains some errors",
        "content-manager.containers.Home.introduction":
          "To edit your entries go to the specific link in the left menu. This plugin doesn't have a proper way to edit settings and it's still under active development.",
        "content-manager.containers.Home.pluginHeaderDescription":
          "Manage your entries through a powerful and beautiful interface.",
        "content-manager.containers.Home.pluginHeaderTitle": "Content Manager",
        "content-manager.containers.List.draft": "Draft",
        "content-manager.containers.List.errorFetchRecords": "Error",
        "content-manager.containers.List.published": "Published",
        "content-manager.containers.ListPage.displayedFields":
          "Displayed Fields",
        "content-manager.containers.ListPage.items":
          "{number, plural, =0 {items} one {item} other {items}}",
        "content-manager.containers.ListPage.table-headers.publishedAt":
          "State",
        "content-manager.containers.ListPage.selectedEntriesModal.title":
          "Publish entries",
        "content-manager.containers.ListPage.selectedEntriesModal.selectedCount":
          "<b>{alreadyPublishedCount}</b> {alreadyPublishedCount, plural, =0 {entries} one {entry} other {entries}} already published. <b>{readyToPublishCount}</b> {readyToPublishCount, plural, =0 {entries} one {entry} other {entries}} ready to publish. <b>{withErrorsCount}</b> {withErrorsCount, plural, =0 {entries} one {entry} other {entries}} waiting for action.",
        "content-manager.containers.ListPage.selectedEntriesModal.publishedCount":
          "<b>{publishedCount}</b> {publishedCount, plural, =0 {entries} one {entry} other {entries}} published. <b>{withErrorsCount}</b> {withErrorsCount, plural, =0 {entries} one {entry} other {entries}} waiting for action.",
        "content-manager.containers.ListSettingsView.modal-form.edit-label":
          "Edit {fieldName}",
        "content-manager.containers.SettingPage.add.field":
          "Insert another field",
        "content-manager.containers.SettingPage.add.relational-field":
          "Insert another related field",
        "content-manager.containers.SettingPage.attributes":
          "Attributes fields",
        "content-manager.containers.SettingPage.attributes.description":
          "Define the order of the attributes",
        "content-manager.containers.SettingPage.editSettings.description":
          "Drag & drop the fields to build the layout",
        "content-manager.containers.SettingPage.editSettings.entry.title":
          "Entry title",
        "content-manager.containers.SettingPage.editSettings.entry.title.description":
          "Set the displayed field of your entry",
        "content-manager.containers.SettingPage.editSettings.relation-field.description":
          "Set the displayed field in both the edit and list views",
        "content-manager.containers.SettingPage.editSettings.title":
          "Edit view (settings)",
        "content-manager.containers.SettingPage.layout": "Layout",
        "content-manager.containers.SettingPage.listSettings.description":
          "Configure the options for this Collection Type",
        "content-manager.containers.SettingPage.listSettings.title":
          "List view (settings)",
        "content-manager.containers.SettingPage.pluginHeaderDescription":
          "Configure the specific settings for this Collection Type",
        "content-manager.containers.SettingPage.relations": "Related fields",
        "content-manager.containers.SettingPage.settings": "Settings",
        "content-manager.containers.SettingPage.view": "View",
        "content-manager.containers.SettingViewModel.pluginHeader.title":
          "Content Manager — {name}",
        "content-manager.containers.SettingsPage.Block.contentType.description":
          "Configure the specific settings",
        "content-manager.containers.SettingsPage.Block.contentType.title":
          "Collection Types",
        "content-manager.containers.SettingsPage.Block.generalSettings.description":
          "Configure the default options for your Collection Types",
        "content-manager.containers.SettingsPage.Block.generalSettings.title":
          "General",
        "content-manager.containers.SettingsPage.pluginHeaderDescription":
          "Configure the settings for all your Collection Types and Groups",
        "content-manager.containers.SettingsView.list.subtitle":
          "Configure the layout and display of your Collection Types and Groups",
        "content-manager.containers.SettingsView.list.title":
          "Display configurations",
        "content-manager.dnd.cancel-item":
          "{item}, dropped. Re-order cancelled.",
        "content-manager.dnd.drop-item":
          "{item}, dropped. Final position in list: {position}.",
        "content-manager.dnd.grab-item":
          "{item}, grabbed. Current position in list: {position}. Press up and down arrow to change position, Spacebar to drop, Escape to cancel.",
        "content-manager.dnd.instructions":
          "Press spacebar to grab and re-order",
        "content-manager.dnd.reorder":
          "{item}, moved. New position in list: {position}.",
        "content-manager.edit-settings-view.link-to-ctb.components":
          "Edit the component",
        "content-manager.edit-settings-view.link-to-ctb.content-types":
          "Edit the content type",
        "content-manager.emptyAttributes.button":
          "Go to Collection Type builder",
        "content-manager.emptyAttributes.description":
          "Add your first field to your Collection Type",
        "content-manager.emptyAttributes.title": "There are no fields yet",
        "content-manager.error.attribute.key.taken":
          "This value already exists",
        "content-manager.error.attribute.sameKeyAndName": "Can't be equals",
        "content-manager.error.attribute.taken":
          "This field name already exists",
        "content-manager.error.contentTypeName.taken":
          "This name already exists",
        "content-manager.error.model.fetch":
          "An error occurred during models config fetch.",
        "content-manager.error.record.create":
          "An error occurred during record creation.",
        "content-manager.error.record.delete":
          "An error occurred during record deletion.",
        "content-manager.error.record.fetch":
          "An error occurred during record fetch.",
        "content-manager.error.record.update":
          "An error occurred during record update.",
        "content-manager.error.records.count":
          "An error occurred during count records fetch.",
        "content-manager.error.records.fetch":
          "An error occurred during records fetch.",
        "content-manager.error.schema.generation":
          "An error occurred during schema generation.",
        "content-manager.error.validation.json": "This is not a JSON",
        "content-manager.error.validation.max":
          "The value is too high (max: {max}).",
        "content-manager.error.validation.maxLength":
          "The value is too long (max: {max}).",
        "content-manager.error.validation.min":
          "The value is too low (min: {min}).",
        "content-manager.error.validation.minLength":
          "The value is too short (min: {min}).",
        "content-manager.error.validation.minSupMax": "Can't be superior",
        "content-manager.error.validation.regex":
          "The value does not match the regex.",
        "content-manager.error.validation.required":
          "This value input is required.",
        "content-manager.form.Input.bulkActions": "Enable bulk actions",
        "content-manager.form.Input.defaultSort": "Default sort attribute",
        "content-manager.form.Input.description": "Description",
        "content-manager.form.Input.description.placeholder":
          "Display name in the profile",
        "content-manager.form.Input.editable": "Editable field",
        "content-manager.form.Input.filters": "Enable filters",
        "content-manager.form.Input.hint.character.unit":
          "{maxValue, plural, one { character} other { characters}}",
        "content-manager.form.Input.hint.minMaxDivider": " / ",
        "content-manager.form.Input.hint.text":
          "{min, select, undefined {} other {min. {min}}}{divider}{max, select, undefined {} other {max. {max}}}{unit}{br}{description}",
        "content-manager.form.Input.label": "Label",
        "content-manager.form.Input.label.inputDescription":
          "This value overrides the label displayed in the table's head",
        "content-manager.form.Input.pageEntries": "Entries per page",
        "content-manager.form.Input.pageEntries.inputDescription":
          "Note: You can override this value in the Collection Type settings page.",
        "content-manager.form.Input.placeholder": "Placeholder",
        "content-manager.form.Input.placeholder.placeholder":
          "My awesome value",
        "content-manager.form.Input.search": "Enable search",
        "content-manager.form.Input.search.field":
          "Enable search on this field",
        "content-manager.form.Input.sort.field": "Enable sort on this field",
        "content-manager.form.Input.sort.order": "Default sort order",
        "content-manager.form.Input.wysiwyg": "Display as WYSIWYG",
        "content-manager.global.displayedFields": "Displayed Fields",
        "content-manager.groups": "Groups",
        "content-manager.groups.numbered": "Groups ({number})",
        "content-manager.header.name": "Content",
        "content-manager.link-to-ctb": "Edit the model",
        "content-manager.models": "Collection Types",
        "content-manager.models.numbered": "Collection Types ({number})",
        "content-manager.notification.error.displayedFields":
          "You need at least one displayed field",
        "content-manager.notification.error.relationship.fetch":
          "An error occurred during relationship fetch.",
        "content-manager.notification.info.SettingPage.disableSort":
          "You need to have one attribute with the sorting allowed",
        "content-manager.notification.info.minimumFields":
          "You need to have at least one field displayed",
        "content-manager.notification.upload.error":
          "An error has occurred while uploading your files",
        "content-manager.pageNotFound": "Page not found",
        "content-manager.pages.ListView.header-subtitle":
          "{number, plural, =0 {# entries} one {# entry} other {# entries}} found",
        "content-manager.pages.NoContentType.button":
          "Create your first Content-Type",
        "content-manager.pages.NoContentType.text":
          "You don't have any content yet, we recommend you to create your first Content-Type.",
        "content-manager.permissions.not-allowed.create":
          "You are not allowed to create a document",
        "content-manager.permissions.not-allowed.update":
          "You are not allowed to see this document",
        "content-manager.plugin.description.long":
          "Quick way to see, edit and delete the data in your database.",
        "content-manager.plugin.description.short":
          "Quick way to see, edit and delete the data in your database.",
        "content-manager.popUpWarning.bodyMessage.contentType.delete":
          "Are you sure to delete Content-Type?",
        "content-manager.popUpWarning.bodyMessage.contentType.delete.all":
          "Are you sure you want to delete these entries?",
        "content-manager.popUpWarning.bodyMessage.contentType.publish.all":
          "Are you sure you want to publish these entries?",
        "content-manager.popUpWarning.bodyMessage.contentType.unpublish.all":
          "Are you sure you want to unpublish these entries?",
        "content-manager.popUpWarning.warning.has-draft-relations.title":
          "Confirmation",
        "content-manager.popUpWarning.warning.publish-question":
          "Do you still want to publish?",
        "content-manager.popUpWarning.warning.unpublish":
          "If you don't publish this content, it will automatically turn into a Draft.",
        "content-manager.popUpWarning.warning.unpublish-question":
          "Are you sure you don't want to publish it?",
        "content-manager.popUpWarning.warning.updateAllSettings":
          "This will modify all your settings",
        "content-manager.popUpwarning.warning.has-draft-relations.button-confirm":
          "Yes, publish",
        "content-manager.popUpwarning.warning.has-draft-relations.message":
          "<b>{count, plural, one { relation is } other { relations are } }</b> not published yet and might lead to unexpected behavior.",
        "content-manager.popUpwarning.warning.bulk-has-draft-relations.message":
          "<b>{count} {count, plural, one { relation } other { relations } } out of {entities} { entities, plural, one { entry } other { entries } } {count, plural, one { is } other { are } }</b> not published yet and might lead to unexpected behavior. ",
        "content-manager.popover.display-relations.label": "Display relations",
        "content-manager.relation.add": "Add relation",
        "content-manager.relation.disconnect": "Remove",
        "content-manager.relation.isLoading": "Relations are loading",
        "content-manager.relation.loadMore": "Load More",
        "content-manager.relation.notAvailable": "No relations available",
        "content-manager.relation.publicationState.draft": "Draft",
        "content-manager.relation.publicationState.published": "Published",
        "content-manager.reviewWorkflows.stage.label": "Review stage",
        "content-manager.select.currently.selected":
          "{count} currently selected",
        "content-manager.success.record.delete": "Deleted",
        "content-manager.success.record.publish": "Published",
        "content-manager.success.record.publishing": "Publishing...",
        "content-manager.success.record.save": "Saved",
        "content-manager.success.record.unpublish": "Unpublished",
        "content-manager.utils.data-loaded":
          "The {number, plural, =1 {entry has} other {entries have}} successfully been loaded",
        "content-manager.listView.validation.errors.title": "Action required",
        "content-manager.listView.validation.errors.message":
          "Please make sure all fields are valid before publishing (required field, min/max character limit, etc.)",
        dark: "Dark",
        "form.button.continue": "Continue",
        "form.button.done": "Done",
        "global.actions": "Actions",
        "global.auditLogs": "Audit Logs",
        "global.back": "Back",
        "global.cancel": "Cancel",
        "global.change-password": "Change password",
        "global.close": "Close",
        "global.content-manager": "Content Manager",
        "global.continue": "Continue",
        "global.delete": "Delete",
        "global.delete-target": "Delete {target}",
        "global.description": "Description",
        "global.details": "Details",
        "global.disabled": "Disabled",
        "global.documentation": "Documentation",
        "global.enabled": "Enabled",
        "global.finish": "Finish",
        "global.marketplace": "Marketplace",
        "global.name": "Name",
        "global.none": "None",
        "global.password": "Password",
        "global.plugins": "Plugins",
        "global.plugins.content-manager": "Content Manager",
        "global.plugins.content-manager.description":
          "Quick way to see, edit and delete the data in your database.",
        "global.plugins.content-type-builder": "Content Type Builder",
        "global.plugins.content-type-builder.description":
          "Modelize the data structure of your API. Create new fields and relations in just a minute. The files are automatically created and updated in your project.",
        "global.plugins.documentation": "Documentation",
        "global.plugins.documentation.description":
          "Create an OpenAPI Document and visualize your API with SWAGGER UI.",
        "global.plugins.email": "Email",
        "global.plugins.email.description":
          "Configure your application to send emails.",
        "global.plugins.graphql": "GraphQL",
        "global.plugins.graphql.description":
          "Adds GraphQL endpoint with default API methods.",
        "global.plugins.i18n": "Internationalization",
        "global.plugins.i18n.description":
          "This plugin enables to create, to read and to update content in different languages, both from the Admin Panel and from the API.",
        "global.plugins.sentry": "Sentry",
        "global.plugins.sentry.description":
          "Send Hyperce error events to Sentry.",
        "global.plugins.upload": "Media Library",
        "global.plugins.upload.description": "Media file management.",
        "global.plugins.users-permissions": "Roles & Permissions",
        "global.plugins.users-permissions.description":
          "Protect your API with a full authentication process based on JWT. This plugin comes also with an ACL strategy that allows you to manage the permissions between the groups of users.",
        "global.profile": "Profile",
        "global.prompt.unsaved":
          "Are you sure you want to leave this page? All your modifications will be lost",
        "global.reset-password": "Reset password",
        "global.roles": "Roles",
        "global.save": "Save",
        "global.search": "Search",
        "global.see-more": "See more",
        "global.select": "Select",
        "global.select-all-entries": "Select all entries",
        "global.settings": "Settings",
        "global.type": "Type",
        "global.users": "Users",
        "global.fullname": "{firstname} {lastname}",
        light: "Light",
        "notification.contentType.relations.conflict":
          "Content type has conflicting relations",
        "notification.default.title": "Information:",
        "notification.ee.warning.at-seat-limit.title":
          "{licenseLimitStatus, select, OVER_LIMIT {Over} AT_LIMIT {At}} seat limit ({currentUserCount}/{permittedSeats})",
        "notification.ee.warning.over-.message":
          "Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} AT_LIMIT {re-enable}} Users. If you already did it but it's not reflected in Hyperce yet, make sure to restart your app.",
        "notification.error": "An error occurred",
        "notification.error.invalid.configuration":
          "You have an invalid configuration, check your server log for more information.",
        "notification.error.layout": "Couldn't retrieve the layout",
        "notification.error.tokennamenotunique":
          "Name already assigned to another token",
        "notification.form.error.fields": "The form contains some errors",
        "notification.form.success.fields": "Changes saved",
        "notification.link-copied": "Link copied into the clipboard",
        "notification.permission.not-allowed-read":
          "You are not allowed to see this document",
        "notification.success.apitokencreated":
          "API Token successfully created",
        "notification.success.apitokenedited": "API Token successfully edited",
        "notification.success.delete": "The item has been deleted",
        "notification.success.saved": "Saved",
        "notification.success.title": "Success:",
        "notification.success.transfertokencreated":
          "Transfer Token successfully created",
        "notification.success.transfertokenedited":
          "Transfer Token successfully edited",
        "notification.version.update.message":
          "A new version of Hyperce is available!",
        "notification.warning.404": "404 - Not found",
        "notification.warning.title": "Warning:",
        or: "OR",
        "request.error.model.unknown": "This model doesn't exist",
        selectButtonTitle: "Select",
        skipToContent: "Skip to content",
        submit: "Submit",
      },
    },
    tutorials: false,
    notifications: { releases: false },
  },
  bootstrap() {},
};
