/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: JspC/ApacheTomcat8
 * Generated at: 2020-12-22 22:47:13 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.partials;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class processor_002ddetails_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("\n\n<div id=\"processor-details\" class=\"hidden large-dialog\">\n    <div id=\"processor-details-status-bar\"></div>\n    <div class=\"dialog-content\">\n        <div id=\"processor-details-tabs\" class=\"tab-container\"></div>\n        <div id=\"processor-details-tabs-content\">\n            <div id=\"details-standard-settings-tab-content\" class=\"details-tab\">\n                <div class=\"settings-left\">\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">Name</div>\n                        <div class=\"setting-field\">\n                            <span id=\"read-only-processor-name\"></span>\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">Id</div>\n                        <div class=\"setting-field\">\n                            <span id=\"read-only-processor-id\"></span>\n                        </div>\n                    </div>\n                    <div class=\"setting\">\n");
      out.write("                        <div class=\"setting-name\">Type</div>\n                        <div id=\"read-only-processor-type\" class=\"setting-field\"></div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">Bundle</div>\n                        <div id=\"read-only-processor-bundle\" class=\"setting-field\"></div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    <div class=\"setting\">\n                        <div class=\"penalty-duration-setting\">\n                            <div class=\"setting-name\">\n                                Penalty duration\n                                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The amount of time used when this processor penalizes a FlowFile.\"></div>\n                            </div>\n                            <div class=\"setting-field\">\n                                <span id=\"read-only-penalty-duration\"></span>\n");
      out.write("                            </div>\n                        </div>\n                        <div class=\"yield-duration-setting\">\n                            <div class=\"setting-name\">\n                                Yield duration\n                                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"When a processor yields, it will not be scheduled again until this amount of time elapses.\"></div>\n                            </div>\n                            <div class=\"setting-field\">\n                                <span id=\"read-only-yield-duration\"></span>\n                            </div>\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    <div class=\"setting\">\n                        <div class=\"bulletin-setting\">\n                            <div class=\"setting-name\">\n                                Bulletin level\n                                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The level at which this processor will generate bulletins.\"></div>\n");
      out.write("                            </div>\n                            <div class=\"setting-field\">\n                                <span id=\"read-only-bulletin-level\"></span>\n                            </div>\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                </div>\n                <div class=\"spacer\">&nbsp;</div>\n                <div class=\"settings-right\">\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">\n                            Automatically terminate relationships\n                            <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"Will automatically terminate FlowFiles sent to all relationships in bold.\"></div>\n                        </div>\n                        <div class=\"setting-field\">\n                            <div id=\"read-only-auto-terminate-relationship-names\"></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div id=\"details-scheduling-tab-content\" class=\"details-tab\">\n");
      out.write("                <div class=\"settings-left\">\n                    <div class=\"setting\">\n                        <div class=\"scheduling-strategy-setting\">\n                            <div class=\"setting-name\">\n                                Scheduling strategy\n                                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The strategy used to schedule this processor.\"></div>\n                            </div>\n                            <div class=\"setting-field\">\n                                <span id=\"read-only-scheduling-strategy\"></span>\n                            </div>\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    <div class=\"setting\">\n                        <div class=\"concurrently-schedulable-tasks-setting\">\n                            <div class=\"setting-name\">\n                                Concurrent tasks\n                                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The number of tasks that should be concurrently scheduled for this processor.\"></div>\n");
      out.write("                            </div>\n                            <div class=\"setting-field\">\n                                <span id=\"read-only-concurrently-schedulable-tasks\"></span>\n                            </div>\n                        </div>\n                        <div id=\"read-only-run-schedule\" class=\"scheduling-period-setting\">\n                            <div class=\"setting-name\">\n                                Run schedule\n                                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The minimum number of seconds that should elapse between task executions.\"></div>\n                            </div>\n                            <div class=\"setting-field\">\n                                <span id=\"read-only-scheduling-period\"></span>\n                            </div>\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                    <div id=\"read-only-execution-node-options\" class=\"setting\">\n                        <div class=\"execution-node-setting\">\n");
      out.write("                            <div class=\"setting-name\">\n                                Execution\n                                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The node(s) that this processor will be scheduled to run on.\"></div>\n                            </div>\n                            <div class=\"setting-field\">\n                                <span id=\"read-only-execution-node\"></span>\n                            </div>\n                        </div>\n                        <div class=\"clear\"></div>\n                    </div>\n                </div>\n                <div class=\"spacer\">&nbsp;</div>\n                <div class=\"settings-right\">\n                    <div class=\"setting\">\n                        <div class=\"setting-name\">\n                            Run duration\n                            <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"When scheduled to run, the processor will continue running for up to this duration. A run duration of 0ms will execute once when scheduled.\"></div>\n");
      out.write("                        </div>\n                        <div class=\"setting-field\">\n                            <span id=\"read-only-run-duration\"></span>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div id=\"details-processor-properties-tab-content\" class=\"details-tab\">\n                <div id=\"read-only-processor-properties\"></div>\n            </div>\n            <div id=\"details-processor-comments-tab-content\" class=\"details-tab\">\n                <div class=\"setting\">\n                    <div class=\"setting-name\">Comments</div>\n                    <div class=\"setting-field\">\n                        <div id=\"read-only-processor-comments\"></div>\n                    </div>\n                    <div class=\"clear\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");
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
