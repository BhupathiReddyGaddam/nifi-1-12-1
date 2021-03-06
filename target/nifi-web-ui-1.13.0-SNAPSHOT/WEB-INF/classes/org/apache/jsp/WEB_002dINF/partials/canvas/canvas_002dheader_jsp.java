/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: JspC/ApacheTomcat8
 * Generated at: 2020-12-23 22:12:18 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.partials.canvas;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class canvas_002dheader_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent,
                 org.apache.jasper.runtime.JspSourceImports {

  private static final javax.servlet.jsp.JspFactory _jspxFactory =
          javax.servlet.jsp.JspFactory.getDefaultFactory();

  private static java.util.Map<java.lang.String,java.lang.Long> _jspx_dependants;

  private static final java.util.Set<java.lang.String> _jspx_imports_packages;

  private static final java.util.Set<java.lang.String> _jspx_imports_classes;

  static {
    _jspx_imports_packages = new java.util.HashSet<>();
    _jspx_imports_packages.add("javax.servlet");
    _jspx_imports_packages.add("javax.servlet.http");
    _jspx_imports_packages.add("javax.servlet.jsp");
    _jspx_imports_classes = null;
  }

  private volatile javax.el.ExpressionFactory _el_expressionfactory;
  private volatile org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public java.util.Map<java.lang.String,java.lang.Long> getDependants() {
    return _jspx_dependants;
  }

  public java.util.Set<java.lang.String> getPackageImports() {
    return _jspx_imports_packages;
  }

  public java.util.Set<java.lang.String> getClassImports() {
    return _jspx_imports_classes;
  }

  public javax.el.ExpressionFactory _jsp_getExpressionFactory() {
    if (_el_expressionfactory == null) {
      synchronized (this) {
        if (_el_expressionfactory == null) {
          _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
        }
      }
    }
    return _el_expressionfactory;
  }

  public org.apache.tomcat.InstanceManager _jsp_getInstanceManager() {
    if (_jsp_instancemanager == null) {
      synchronized (this) {
        if (_jsp_instancemanager == null) {
          _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
        }
      }
    }
    return _jsp_instancemanager;
  }

  public void _jspInit() {
  }

  public void _jspDestroy() {
  }

  public void _jspService(final javax.servlet.http.HttpServletRequest request, final javax.servlet.http.HttpServletResponse response)
      throws java.io.IOException, javax.servlet.ServletException {

    final java.lang.String _jspx_method = request.getMethod();
    if (!"GET".equals(_jspx_method) && !"POST".equals(_jspx_method) && !"HEAD".equals(_jspx_method) && !javax.servlet.DispatcherType.ERROR.equals(request.getDispatcherType())) {
      response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET, POST or HEAD. Jasper also permits OPTIONS");
      return;
    }

    final javax.servlet.jsp.PageContext pageContext;
    final javax.servlet.ServletContext application;
    final javax.servlet.ServletConfig config;
    javax.servlet.jsp.JspWriter out = null;
    final java.lang.Object page = this;
    javax.servlet.jsp.JspWriter _jspx_out = null;
    javax.servlet.jsp.PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html;charset=UTF-8");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, false, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\r\n\r\n<md-toolbar id=\"header\" layout-align=\"space-between center\" layout=\"row\" class=\"md-small md-accent md-hue-1\">\r\n    <div class=\"app-title\">\r\n        <img id=\"nifi-logo\" src=\"images/geodis-logo.svg\" alt=\"Geodis Logo\">\r\n        <span class=\"app-title-company-name\">GEODIS</span>\r\n        <span class=\"app-title-project-name\">NIFI</span>\r\n    </div>\r\n    <div flex layout=\"row\" layout-align=\"space-between center\">\r\n        <div id=\"component-container\">\r\n            <button title=\"{{appCtrl.serviceProvider.headerCtrl.toolboxCtrl.config.type.processor}}\"\r\n                    id=\"processor-component\"\r\n                    class=\"component-button icon icon-processor\"\r\n                    ng-disabled=\"!appCtrl.nf.CanvasUtils.canWriteCurrentGroup();\"\r\n                    nf-draggable=\"appCtrl.serviceProvider.headerCtrl.toolboxCtrl.draggableComponentConfig(appCtrl.serviceProvider.headerCtrl.toolboxCtrl.processorComponent);\">\r\n                <span class=\"component-button-grip\"></span>\r\n            </button>\r\n            <button title=\"{{appCtrl.serviceProvider.headerCtrl.toolboxCtrl.config.type.inputPort}}\"\r\n");
      out.write("                    id=\"port-in-component\"\r\n                    class=\"component-button icon icon-port-in\"\r\n                    ng-disabled=\"!appCtrl.nf.CanvasUtils.canWriteCurrentGroup();\"\r\n                    nf-draggable=\"appCtrl.serviceProvider.headerCtrl.toolboxCtrl.draggableComponentConfig(appCtrl.serviceProvider.headerCtrl.toolboxCtrl.inputPortComponent);\">\r\n                <span class=\"component-button-grip\"></span>\r\n            </button>\r\n            <button title=\"{{appCtrl.serviceProvider.headerCtrl.toolboxCtrl.config.type.outputPort}}\"\r\n                    id=\"port-out-component\"\r\n                    class=\"component-button icon icon-port-out\"\r\n                    ng-disabled=\"!appCtrl.nf.CanvasUtils.canWriteCurrentGroup();\"\r\n                    nf-draggable=\"appCtrl.serviceProvider.headerCtrl.toolboxCtrl.draggableComponentConfig(appCtrl.serviceProvider.headerCtrl.toolboxCtrl.outputPortComponent);\">\r\n                <span class=\"component-button-grip\"></span>\r\n            </button>\r\n            <button title=\"{{appCtrl.serviceProvider.headerCtrl.toolboxCtrl.config.type.processGroup}}\"\r\n");
      out.write("                    id=\"group-component\"\r\n                    class=\"component-button icon icon-group\"\r\n                    ng-disabled=\"!appCtrl.nf.CanvasUtils.canWriteCurrentGroup();\"\r\n                    nf-draggable=\"appCtrl.serviceProvider.headerCtrl.toolboxCtrl.draggableComponentConfig(appCtrl.serviceProvider.headerCtrl.toolboxCtrl.groupComponent);\">\r\n                <span class=\"component-button-grip\"></span>\r\n            </button>\r\n            <button title=\"{{appCtrl.serviceProvider.headerCtrl.toolboxCtrl.config.type.remoteProcessGroup}}\"\r\n                    id=\"group-remote-component\"\r\n                    class=\"component-button icon icon-group-remote\"\r\n                    ng-disabled=\"!appCtrl.nf.CanvasUtils.canWriteCurrentGroup();\"\r\n                    nf-draggable=\"appCtrl.serviceProvider.headerCtrl.toolboxCtrl.draggableComponentConfig(appCtrl.serviceProvider.headerCtrl.toolboxCtrl.remoteGroupComponent);\">\r\n                <span class=\"component-button-grip\"></span>\r\n            </button>\r\n            <button title=\"{{appCtrl.serviceProvider.headerCtrl.toolboxCtrl.config.type.funnel}}\"\r\n");
      out.write("                    id=\"funnel-component\"\r\n                    class=\"component-button icon icon-funnel\"\r\n                    ng-disabled=\"!appCtrl.nf.CanvasUtils.canWriteCurrentGroup();\"\r\n                    nf-draggable=\"appCtrl.serviceProvider.headerCtrl.toolboxCtrl.draggableComponentConfig(appCtrl.serviceProvider.headerCtrl.toolboxCtrl.funnelComponent);\">\r\n                <span class=\"component-button-grip\"></span>\r\n            </button>\r\n            <button title=\"{{appCtrl.serviceProvider.headerCtrl.toolboxCtrl.config.type.template}}\"\r\n                    id=\"template-component\"\r\n                    class=\"component-button icon icon-template\"\r\n                    ng-disabled=\"!appCtrl.nf.CanvasUtils.canWriteCurrentGroup();\"\r\n                    nf-draggable=\"appCtrl.serviceProvider.headerCtrl.toolboxCtrl.draggableComponentConfig(appCtrl.serviceProvider.headerCtrl.toolboxCtrl.templateComponent);\">\r\n                <span class=\"component-button-grip\"></span>\r\n            </button>\r\n            <button title=\"{{appCtrl.serviceProvider.headerCtrl.toolboxCtrl.config.type.label}}\"\r\n");
      out.write("                    id=\"label-component\"\r\n                    class=\"component-button icon icon-label\"\r\n                    ng-disabled=\"!appCtrl.nf.CanvasUtils.canWriteCurrentGroup();\"\r\n                    nf-draggable=\"appCtrl.serviceProvider.headerCtrl.toolboxCtrl.draggableComponentConfig(appCtrl.serviceProvider.headerCtrl.toolboxCtrl.labelComponent);\">\r\n                <span class=\"component-button-grip\"></span>\r\n            </button>\r\n        </div>\r\n        <div layout=\"row\" layout-align=\"space-between center\">\r\n            <div layout-align=\"space-between end\" layout=\"column\">\r\n                <div layout=\"row\" layout-align=\"space-between center\" id=\"current-user-container\">\r\n                    <span id=\"anonymous-user-alert\" class=\"hidden fa fa-warning\"></span>\r\n                    <div></div>\r\n                    <div id=\"current-user\"></div>\r\n                </div>\r\n                <div id=\"login-link-container\">\r\n                    <span id=\"login-link\" class=\"link\"\r\n                          ng-click=\"appCtrl.serviceProvider.headerCtrl.loginCtrl.shell.launch();\">log in</span>\r\n");
      out.write("                </div>\r\n                <div id=\"logout-link-container\" style=\"display: none;\">\r\n                    <span id=\"logout-link\" class=\"link\"\r\n                          ng-click=\"appCtrl.serviceProvider.headerCtrl.logoutCtrl.logout();\">log out</span>\r\n                </div>\r\n            </div>\r\n            <md-menu md-position-mode=\"target-right target\" md-offset=\"-1 44\">\r\n                <button md-menu-origin id=\"global-menu-button\" ng-click=\"$mdMenu.open()\">\r\n                    <div class=\"fa fa-navicon\"></div>\r\n                </button>\r\n                <md-menu-content id=\"global-menu-content\">\r\n                    <md-menu-item layout-align=\"space-around center\">\r\n                        <a id=\"reporting-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.summary.shell.launch();\">\r\n                            <i class=\"fa fa-table\"></i>Summary\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-item layout-align=\"space-around center\">\r\n");
      out.write("                        <a id=\"counters-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.counters.shell.launch();\"\r\n                           ng-class=\"{disabled: !appCtrl.nf.Common.canAccessCounters()}\">\r\n                            <i class=\"icon icon-counter\"></i>Counters\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-item layout-align=\"space-around center\">\r\n                        <a id=\"bulletin-board-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.bulletinBoard.shell.launch();\">\r\n                            <i class=\"fa fa-sticky-note-o\"></i>Bulletin Board\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-divider></md-menu-divider>\r\n                    <md-menu-item\r\n                            layout-align=\"space-around center\">\r\n                        <a id=\"provenance-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.dataProvenance.shell.launch();\"\r\n");
      out.write("                           ng-class=\"{disabled: !appCtrl.nf.Common.canAccessProvenance()}\">\r\n                            <i class=\"icon icon-provenance\"></i>Data Provenance\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-divider></md-menu-divider>\r\n                    <md-menu-item layout-align=\"space-around center\">\r\n                        <a id=\"flow-settings-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.controllerSettings.shell.launch();\">\r\n                            <i class=\"fa fa-wrench\"></i>Controller Settings\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-item layout-align=\"space-around center\">\r\n                        <a id=\"parameter-contexts-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.parameterContexts.shell.launch();\">\r\n                            <i class=\"fa\"></i>Parameter Contexts\r\n                        </a>\r\n");
      out.write("                    </md-menu-item>\r\n                    <md-menu-item ng-if=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.cluster.visible();\"\r\n                                  layout-align=\"space-around center\">\r\n                        <a id=\"cluster-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.cluster.shell.launch();\"\r\n                           ng-class=\"{disabled: !appCtrl.nf.Common.canAccessController()}\">\r\n                            <i class=\"fa fa-cubes\"></i>Cluster\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-item layout-align=\"space-around center\">\r\n                        <a id=\"history-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.flowConfigHistory.shell.launch();\">\r\n                            <i class=\"fa fa-history\"></i>Flow Configuration History\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-item layout-align=\"space-around center\">\r\n");
      out.write("                        <a id=\"status-history-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.nodeStatusHistory.shell.launch();\">\r\n                            <i class=\"fa fa-area-chart\"></i>Node Status History\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-divider ng-if=\"appCtrl.nf.CanvasUtils.isManagedAuthorizer()\"></md-menu-divider>\r\n                    <md-menu-item layout-align=\"space-around center\" ng-if=\"appCtrl.nf.CanvasUtils.isManagedAuthorizer()\">\r\n                        <a id=\"users-link\" layout=\"row\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.users.shell.launch();\"\r\n                           ng-class=\"{disabled: !(appCtrl.nf.Common.canAccessTenants())}\">\r\n                            <i class=\"fa fa-users\"></i>Users\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-item layout-align=\"space-around center\" ng-if=\"appCtrl.nf.CanvasUtils.isManagedAuthorizer()\">\r\n");
      out.write("                        <a id=\"policies-link\" layout=\"row\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.policies.shell.launch();\"\r\n                           ng-class=\"{disabled: !(appCtrl.nf.Common.canAccessTenants() && appCtrl.nf.Common.canModifyPolicies())}\">\r\n                            <i class=\"fa fa-key\"></i>Policies\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-divider></md-menu-divider>\r\n                    <md-menu-item layout-align=\"space-around center\">\r\n                        <a id=\"templates-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.templates.shell.launch();\">\r\n                            <i class=\"icon icon-template\"></i>Templates\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-divider></md-menu-divider>\r\n                    <md-menu-item layout-align=\"space-around center\">\r\n                        <a id=\"help-link\"\r\n");
      out.write("                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.help.shell.launch();\">\r\n                            <i class=\"fa fa-question-circle\"></i>Help\r\n                        </a>\r\n                    </md-menu-item>\r\n                    <md-menu-item layout-align=\"space-around center\">\r\n                        <a id=\"about-link\"\r\n                           ng-click=\"appCtrl.serviceProvider.headerCtrl.globalMenuCtrl.about.modal.show();\">\r\n                            <i class=\"fa fa-info-circle\"></i>About\r\n                        </a>\r\n                    </md-menu-item>\r\n                </md-menu-content>\r\n            </md-menu>\r\n        </div>\r\n    </div>\r\n</md-toolbar>\r\n");
    } catch (java.lang.Throwable t) {
      if (!(t instanceof javax.servlet.jsp.SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try {
            if (response.isCommitted()) {
              out.flush();
            } else {
              out.clearBuffer();
            }
          } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
        else throw new ServletException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }
}
