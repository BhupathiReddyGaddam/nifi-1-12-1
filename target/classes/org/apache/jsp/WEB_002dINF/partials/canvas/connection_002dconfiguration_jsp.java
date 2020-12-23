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

public final class connection_002dconfiguration_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("\r\n\r\n<div id=\"connection-configuration\" layout=\"column\" class=\"hidden large-dialog\">\r\n    <div class=\"connection-configuration-tab-container dialog-content\">\r\n        <div id=\"connection-configuration-tabs\" class=\"tab-container\"></div>\r\n        <div id=\"connection-configuration-tabs-content\">\r\n            <div id=\"connection-settings-tab-content\" class=\"configuration-tab\">\r\n                <div class=\"settings-left\">\r\n                    <div class=\"setting\">\r\n                        <div class=\"setting-name\">Name</div>\r\n                        <div class=\"setting-field\">\r\n                            <input type=\"text\" id=\"connection-name\" name=\"connection-name\" class=\"setting-input\"/>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"setting\">\r\n                        <div class=\"setting-name\">Id</div>\r\n                        <div class=\"setting-field\">\r\n                            <span type=\"text\" id=\"connection-id\"></span>\r\n                        </div>\r\n                    </div>\r\n");
      out.write("                    <div class=\"setting\">\r\n                        <div class=\"setting-name\">\r\n                            FlowFile expiration\r\n                            <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The maximum amount of time an object may be in the flow before it will be automatically aged out of the flow.\"></div>\r\n                        </div>\r\n                        <div class=\"setting-field\">\r\n                            <input type=\"text\" id=\"flow-file-expiration\" name=\"flow-file-expiration\" class=\"setting-input\"/>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"multi-column-settings\">\r\n                        <div class=\"setting\">\r\n                            <div class=\"setting-name\">\r\n                                Back Pressure<br/>Object threshold\r\n                                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The maximum number of objects that can be queued before back pressure is applied.\"></div>\r\n                            </div>\r\n");
      out.write("                            <div class=\"setting-field\">\r\n                                <input type=\"text\" id=\"back-pressure-object-threshold\" name=\"back-pressure-object-threshold\" class=\"setting-input\"/>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"separator\">&nbsp;</div>\r\n                        <div class=\"setting\">\r\n                            <div class=\"setting-name\">\r\n                                &nbsp;<br/>Size threshold\r\n                                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The maximum data size of objects that can be queued before back pressure is applied.\"></div>\r\n                            </div>\r\n                            <div class=\"setting-field\">\r\n                                <input type=\"text\" id=\"back-pressure-data-size-threshold\" name=\"back-pressure-data-size-threshold\" class=\"setting-input\"/>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div>\r\n");
      out.write("                        <div class=\"multi-column-settings\">\r\n                            <div class=\"setting\">\r\n                                <div class=\"setting-name\">\r\n                                    Load Balance Strategy\r\n                                    <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"How to load balance the data in this Connection across the nodes in the cluster.\"></div>\r\n                                </div>\r\n                                <div class=\"setting-field\">\r\n                                    <div id=\"load-balance-strategy-combo\"></div>\r\n                                </div>\r\n                            </div>\r\n                            <div id=\"load-balance-partition-attribute-setting-separator\" class=\"separator\">&nbsp;</div>\r\n                            <div id=\"load-balance-partition-attribute-setting\" class=\"setting\">\r\n                                <div class=\"setting-name\">\r\n                                    Attribute Name\r\n                                    <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"The FlowFile Attribute to use for determining which node a FlowFile will go to.\"></div>\r\n");
      out.write("                                </div>\r\n                                <div class=\"setting-field\">\r\n                                    <input type=\"text\" id=\"load-balance-partition-attribute\" name=\"load-balance-partition-attribute\" class=\"setting-input\"/>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div id=\"load-balance-compression-setting\" class=\"setting\">\r\n                            <div class=\"setting-name\">\r\n                                Load Balance Compression\r\n                                <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"Whether or not data should be compressed when being transferred between nodes in the cluster.\"></div>\r\n                            </div>\r\n                            <div class=\"setting-field\">\r\n                                <div id=\"load-balance-compression-combo\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n");
      out.write("                <div class=\"spacer\">&nbsp;</div>\r\n                <div class=\"settings-right\">\r\n                    <div class=\"setting\">\r\n                        <div class=\"setting-name\">\r\n                            Available prioritizers\r\n                            <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"Available prioritizers that could reprioritize FlowFiles in this work queue.\"></div>\r\n                        </div>\r\n                        <div class=\"setting-field\">\r\n                            <ul id=\"prioritizer-available\"></ul>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"setting\">\r\n                        <div class=\"setting-name\">\r\n                            Selected prioritizers\r\n                            <div class=\"fa fa-question-circle\" alt=\"Info\" title=\"Prioritizers that have been selected to reprioritize FlowFiles in this work queue.\"></div>\r\n                        </div>\r\n                        <div class=\"setting-field\">\r\n");
      out.write("                            <ul id=\"prioritizer-selected\"></ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <input type=\"hidden\" id=\"connection-uri\" name=\"connection-uri\"/>\r\n                <input type=\"hidden\" id=\"connection-source-component-id\" name=\"connection-source-component-id\"/>\r\n                <input type=\"hidden\" id=\"connection-source-id\" name=\"connection-source-id\"/>\r\n                <input type=\"hidden\" id=\"connection-source-group-id\" name=\"connection-source-group-id\"/>\r\n                <input type=\"hidden\" id=\"connection-destination-component-id\" name=\"connection-destination-component-id\"/>\r\n                <input type=\"hidden\" id=\"connection-destination-id\" name=\"connection-destination-id\"/>\r\n                <input type=\"hidden\" id=\"connection-destination-group-id\" name=\"connection-destination-group-id\"/>\r\n            </div>\r\n            <div id=\"connection-details-tab-content\" class=\"configuration-tab\">\r\n                <div class=\"settings-left\">\r\n");
      out.write("                    <div id=\"read-only-output-port-source\" class=\"setting hidden\">\r\n                        <div class=\"setting-name\">From output</div>\r\n                        <div class=\"setting-field connection-terminal-label\">\r\n                            <div id=\"read-only-output-port-name\" class=\"ellipsis\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"output-port-source\" class=\"setting hidden\">\r\n                        <div class=\"setting-name\">From output</div>\r\n                        <div class=\"setting-field connection-terminal-label\">\r\n                            <div id=\"output-port-options\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"input-port-source\" class=\"setting hidden\">\r\n                        <div class=\"setting-name\">From input</div>\r\n                        <div class=\"setting-field connection-terminal-label\">\r\n                            <div id=\"input-port-source-name\" class=\"label ellipsis\"></div>\r\n");
      out.write("                        </div>\r\n                    </div>\r\n                    <div id=\"funnel-source\" class=\"setting hidden\">\r\n                        <div class=\"setting-name\">From funnel</div>\r\n                        <div class=\"setting-field connection-terminal-label\">\r\n                            <div id=\"funnel-source-name\" class=\"label ellipsis\" title=\"funnel\">funnel</div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"processor-source\" class=\"setting hidden\">\r\n                        <div class=\"setting-name\">From processor</div>\r\n                        <div class=\"setting-field connection-terminal-label\">\r\n                            <div id=\"processor-source-details\">\r\n                                <div id=\"processor-source-name\" class=\"label ellipsis\"></div>\r\n                                <div id=\"processor-source-type\" class=\"ellipsis\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"connection-source-group\" class=\"setting\">\r\n");
      out.write("                        <div class=\"setting-name\">Within group</div>\r\n                        <div class=\"setting-field\">\r\n                            <div id=\"connection-source-group-name\"></div>\r\n                        </div>\r\n                        <div class=\"setting-field\">\r\n                            <div id=\"connection-remote-source-url\" class=\"hidden\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"relationship-names-container\" class=\"hidden\">\r\n                        <div class=\"setting-name\">For relationships</div>\r\n                        <div class=\"setting-field\">\r\n                            <div id=\"relationship-names\"></div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"spacer\">&nbsp;</div>\r\n                <div class=\"settings-right\">\r\n                    <div id=\"input-port-destination\" class=\"setting hidden\">\r\n                        <div class=\"setting-name\">To input</div>\r\n");
      out.write("                        <div class=\"setting-field connection-terminal-label\">\r\n                            <div id=\"input-port-options\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"output-port-destination\" class=\"setting hidden\">\r\n                        <div class=\"setting-name\">To output</div>\r\n                        <div class=\"setting-field connection-terminal-label\">\r\n                            <div id=\"output-port-destination-name\" class=\"label ellipsis\"></div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"funnel-destination\" class=\"setting hidden\">\r\n                        <div class=\"setting-name\">To funnel</div>\r\n                        <div class=\"setting-field connection-terminal-label\">\r\n                            <div id=\"funnel-destination-name\" class=\"label ellipsis\" title=\"funnel\">funnel</div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"processor-destination\" class=\"setting hidden\">\r\n");
      out.write("                        <div class=\"setting-name\">To processor</div>\r\n                        <div class=\"setting-field connection-terminal-label\">\r\n                            <div id=\"processor-destination-details\">\r\n                                <div id=\"processor-destination-name\" class=\"label ellipsis\"></div>\r\n                                <div id=\"processor-destination-type\" class=\"ellipsis\"></div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div id=\"connection-destination-group\" class=\"setting\">\r\n                        <div class=\"setting-name\">Within group</div>\r\n                        <div class=\"setting-field\">\r\n                            <div id=\"connection-destination-group-name\"></div>\r\n                        </div>\r\n                        <div class=\"setting-field\">\r\n                            <div id=\"connection-remote-destination-url\" class=\"hidden\"></div>\r\n                        </div>\r\n                    </div>\r\n");
      out.write("                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
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
