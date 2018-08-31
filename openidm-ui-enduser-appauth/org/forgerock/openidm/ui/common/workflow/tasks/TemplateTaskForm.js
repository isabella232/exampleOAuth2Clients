"use strict";

/*
 * Copyright 2011-2017 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */

define(["handlebars", "org/forgerock/openidm/ui/common/workflow/tasks/AbstractTaskForm", "org/forgerock/commons/ui/common/util/DateUtil", "org/forgerock/commons/ui/common/main/Configuration"], function (Handlebars, AbstractTaskForm, DateUtil, conf, uiUtils) {

    var TemplateTaskForm = AbstractTaskForm.extend({

        template: "templates/common/EmptyTemplate.html",

        postRender: function postRender(callback) {
            var t = Handlebars.compile(this.args)(this.task);

            this.$el.html(t);

            if (callback) {
                callback();
            }
        }
    });

    return new TemplateTaskForm();
});
