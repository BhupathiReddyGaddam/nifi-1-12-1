/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: JspC/ApacheTomcat8
 * Generated at: 2020-12-21 21:14:36 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.partials.canvas;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class policy_002dmanagement_jsp extends org.apache.jasper.runtime.HttpJspBase
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
      response.sendError(HttpServletResponse.SC_METHOD_NOT_ALLOWED, "JSPs only permit GET POST or HEAD");
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

      out.write("\n\n<div id=\"policy-management\">\n    <div id=\"policy-management-header-text\">Access Policies</div>\n    <div id=\"policy-controls-container\">\n        <span id=\"selected-policy-action\" class=\"hidden\"></span>\n        <span id=\"selected-policy-type\" class=\"hidden\"></span>\n        <div id=\"policy-message-container\">\n            <div id=\"policy-message\"></div>\n            <div id=\"new-policy-message\" class=\"hidden\"><span id=\"create-policy-link\" class=\"link\">Create</span> a new policy.</div>\n            <div id=\"override-policy-message\" class=\"hidden\"><span id=\"override-policy-link\" class=\"link\">Override</span> this policy.</div>\n            <div id=\"add-local-admin-message\" class=\"hidden\"><span id=\"add-local-admin-link\" class=\"link\">Add</span> policy for additional administrators.</div>\n            <div class=\"clear\"></div>\n        </div>\n        <div id=\"global-policy-controls\" class=\"hidden policy-controls\">\n            <div id=\"policy-type-list\"></div>\n            <div id=\"controller-policy-target\" class=\"hidden\"></div>\n");
      out.write("            <div id=\"restricted-component-required-permissions\" class=\"hidden\"></div>\n            <div class=\"clear\"></div>\n        </div>\n        <div id=\"component-policy-controls\" class=\"hidden policy-controls\">\n            <div id=\"policy-selected-component-container\" class=\"hidden policy-selected-component-container\">\n                <div class=\"policy-selected-component-type-icon\">\n                    <i class=\"icon icon-drop\" ng-class=\"appCtrl.serviceProvider.graphControlsCtrl.getContextIcon()\"></i>\n                </div>\n                <div class=\"policy-selected-component-details-container\">\n                    <div class=\"policy-selected-component-name\">{{appCtrl.serviceProvider.graphControlsCtrl.getContextName()}}</div>\n                    <div class=\"policy-selected-component-type\" ng-class=\"appCtrl.serviceProvider.graphControlsCtrl.hide()\">{{appCtrl.serviceProvider.graphControlsCtrl.getContextType()}}</div>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n            <div id=\"policy-selected-template-container\" class=\"hidden policy-selected-component-container\">\n");
      out.write("                <div class=\"policy-selected-component-type-icon\">\n                    <i class=\"icon icon-template\"></i>\n                </div>\n                <div class=\"policy-selected-component-details-container\">\n                    <div class=\"policy-selected-component-name\"></div>\n                    <div class=\"policy-selected-component-type\">Template</div>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n            <div id=\"policy-selected-controller-service-container\" class=\"hidden policy-selected-component-container\">\n                <div class=\"policy-selected-component-type-icon\">\n                    <i class=\"icon icon-drop\"></i>\n                </div>\n                <div class=\"policy-selected-component-details-container\">\n                    <div class=\"policy-selected-component-name\"></div>\n                    <div class=\"policy-selected-component-type\">Controller Service</div>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n");
      out.write("            <div id=\"policy-selected-reporting-task-container\" class=\"hidden policy-selected-component-container\">\n                <div class=\"policy-selected-component-type-icon\">\n                    <i class=\"icon icon-drop\"></i>\n                </div>\n                <div class=\"policy-selected-component-details-container\">\n                    <div class=\"policy-selected-component-name\"></div>\n                    <div class=\"policy-selected-component-type\">Reporting Task</div>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n            <div id=\"policy-selected-parameter-context-container\" class=\"hidden policy-selected-component-container\">\n                <div class=\"policy-selected-component-type-icon\">\n                    <i class=\"icon icon-drop\"></i>\n                </div>\n                <div class=\"policy-selected-component-details-container\">\n                    <div class=\"policy-selected-component-name\"></div>\n                    <div class=\"policy-selected-component-type\">Parameter Context</div>\n");
      out.write("                </div>\n                <div class=\"clear\"></div>\n            </div>\n            <div id=\"selected-policy-component-id\" class=\"hidden\"></div>\n            <div id=\"selected-policy-component-type\" class=\"hidden\"></div>\n            <div id=\"component-policy-target\"></div>\n            <div class=\"clear\"></div>\n        </div>\n        <button id=\"delete-policy-button\" class=\"fa fa-trash policy-button\" title=\"Delete this policy\"></button>\n        <button id=\"new-policy-user-button\" class=\"fa fa-user-plus policy-button\" title=\"Add users/groups to this policy\"></button>\n        <div class=\"clear\"></div>\n    </div>\n    <div id=\"policy-table\"></div>\n    <div id=\"policy-refresh-container\">\n        <button id=\"policy-refresh-button\" class=\"refresh-button pointer fa fa-refresh\" title=\"Refresh\"></button>\n        <div class=\"last-refreshed-container\">\n            Last updated:&nbsp;<span id=\"policy-last-refreshed\" class=\"last-refreshed\"></span>\n        </div>\n        <div id=\"policy-loading-container\" class=\"loading-container\"></div>\n");
      out.write("        <div id=\"admin-policy-message\" class=\"hidden\">Only listing component specific administrators. Inherited administrators not shown.</div>\n        <div id=\"restriction-message\" class=\"hidden\">Only listing restriction specific users. Users with permission \"regardless of restrictions\" not shown but are also allowed.</div>\n        <div class=\"clear\"></div>\n    </div>\n</div>\n");
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
