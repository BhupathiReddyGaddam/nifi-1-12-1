/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: JspC/ApacheTomcat8
 * Generated at: 2020-12-22 22:47:12 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.partials.canvas;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class reporting_002dtask_002dconfiguration_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("\n\n<div id=\"reporting-task-configuration\" class=\"hidden large-dialog\">\n    <div class=\"reporting-task-configuration-tab-container dialog-content\">\n        <div id=\"reporting-task-configuration-tabs\" class=\"tab-container\"></div>\n        <div id=\"reporting-task-configuration-tabs-content\">\n            <div id=\"reporting-task-standard-settings-tab-content\" class=\"configuration-tab\">\n                <div class=\"settings-left\">\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">Name</div>\n                        <div class=\"reporting-task-editable setting-field\">\n                            <input type=\"text\" id=\"reporting-task-name\" name=\"reporting-task-name\"/>\n                            <div class=\"reporting-task-enabled-container\">\n                                <div id=\"reporting-task-enabled\" class=\"nf-checkbox checkbox-unchecked\"></div>\n                                <span class=\"nf-checkbox-label\"> Enabled</span>\n                            </div>\n                        </div>\n");
      out.write("                        <div class=\"reporting-task-read-only setting-field hidden\">\n                            <span id=\"read-only-reporting-task-name\"></span>\n                        </div>\n                    </div>\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">Id</div>\n                        <div class=\"setting-field\">\n                            <span id=\"reporting-task-id\"></span>\n                        </div>\n                    </div>\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">Type</div>\n                        <div class=\"setting-field\">\n                            <span id=\"reporting-task-type\"></span>\n                        </div>\n                    </div>\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">Bundle</div>\n                        <div id=\"reporting-task-bundle\" class=\"setting-field\"></div>\n                    </div>\n                </div>\n                <div class=\"spacer\">&nbsp;</div>\n");
      out.write("                <div class=\"settings-right\">\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">\n                            Scheduling strategy\n                            <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The strategy used to schedule this reporting task.\"></div>\n                        </div>\n                        <div class=\"reporting-task-editable setting-field\">\n                            <div id=\"reporting-task-scheduling-strategy-combo\"></div>\n                        </div>\n                        <div class=\"reporting-task-read-only setting-field hidden\">\n                            <span id=\"read-only-reporting-task-scheduling-strategy\"></span>\n                        </div>\n                    </div>\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">\n                            Run schedule\n                            <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The amount of time that should elapse between task executions.\"></div>\n");
      out.write("                        </div>\n                        <div class=\"reporting-task-editable setting-field\">\n                            <input type=\"text\" id=\"reporting-task-timer-driven-scheduling-period\" class=\"reporting-task-scheduling-period\"/>\n                            <input type=\"text\" id=\"reporting-task-cron-driven-scheduling-period\" class=\"reporting-task-scheduling-period\"/>\n                        </div>\n                        <div class=\"reporting-task-read-only setting-field hidden\">\n                            <span id=\"read-only-reporting-task-scheduling-period\"></span>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"clear\"></div>\n            </div>\n            <div id=\"reporting-task-properties-tab-content\" class=\"configuration-tab\">\n                <div id=\"reporting-task-properties\"></div>\n            </div>\n            <div id=\"reporting-task-comments-tab-content\" class=\"configuration-tab\">\n                <textarea cols=\"30\" rows=\"4\" id=\"reporting-task-comments\" name=\"reporting-task-comments\" class=\"reporting-task-editable setting-input\"></textarea>\n");
      out.write("                <div class=\"setting reporting-task-read-only hidden\">\n                    <div class=\"setting-name\">Comments</div>\n                    <div class=\"setting-field\">\n                        <span id=\"read-only-reporting-task-comments\"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<div id=\"new-reporting-task-property-container\"></div>");
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
