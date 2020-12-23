/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: JspC/ApacheTomcat8
 * Generated at: 2020-12-23 22:12:20 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.partials.canvas;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class remote_002dport_002dconfiguration_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("\r\n\r\n<div id=\"remote-port-configuration\" class=\"hidden medium-dialog\">\r\n    <div class=\"dialog-content\">\r\n        <div class=\"setting\">\r\n            <div class=\"setting-name\">Name</div>\r\n            <div class=\"setting-field\">\r\n                <span id=\"remote-port-id\" class=\"hidden\"></span>\r\n                <span id=\"remote-port-type\" class=\"hidden\"></span>\r\n                <div id=\"remote-port-name\" class=\"ellipsis\"></div>\r\n            </div>\r\n        </div>\r\n        <div class=\"setting\">\r\n            <div class=\"setting-name\">\r\n                Concurrent tasks\r\n                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The number of tasks that should be concurrently scheduled for this port.\"></div>\r\n            </div>\r\n            <div class=\"setting-field\">\r\n                <input id=\"remote-port-concurrent-tasks\" type=\"text\"/>\r\n                <div id=\"remote-port-use-compression-container\">\r\n                    <div id=\"remote-port-use-compression\" class=\"nf-checkbox\"></div>\r\n                    <span class=\"nf-checkbox-label\">Compressed</span>\r\n");
      out.write("                </div>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n        </div>\r\n        <div class=\"batch-settings\">\r\n            <div class=\"setting-name\">\r\n                Batch Settings:\r\n            </div>\r\n            <div class=\"setting batch-setting\">\r\n                <div class=\"setting-name\">\r\n                    Count\r\n                    <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The preferred number of flow files to include in a transaction for this port.\"></div>\r\n                </div>\r\n                <div class=\"setting-field\">\r\n                    <input id=\"remote-port-batch-count\" type=\"text\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"setting batch-setting\">\r\n                <div class=\"setting-name\">\r\n                    Size\r\n                    <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The preferred number of bytes to include in a transaction for this port.\"></div>\r\n                </div>\r\n                <div class=\"setting-field\">\r\n");
      out.write("                    <input id=\"remote-port-batch-size\" type=\"text\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"setting batch-setting\">\r\n                <div class=\"setting-name\">\r\n                    Duration\r\n                    <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The preferred amount of time that a transaction should span for this port.\"></div>\r\n                </div>\r\n                <div class=\"setting-field\">\r\n                    <input id=\"remote-port-batch-duration\" type=\"text\"/>\r\n                </div>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
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