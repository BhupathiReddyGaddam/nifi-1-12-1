/*
 * Generated by the Jasper component of Apache Tomcat
 * Version: JspC/ApacheTomcat8
 * Generated at: 2020-12-23 22:12:19 UTC
 * Note: The last modified time of this file was set to
 *       the last modified time of the source file after
 *       generation to assist with modification tracking.
 */
package org.apache.jsp.WEB_002dINF.partials.canvas;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;

public final class navigation_jsp extends org.apache.jasper.runtime.HttpJspBase
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

      out.write("\r\n\r\n<nf-breadcrumbs\r\n        breadcrumbs=\"appCtrl.serviceProvider.breadcrumbsCtrl.getBreadcrumbs();\"\r\n        click-func=\"appCtrl.nf.CanvasUtils.getComponentByType('ProcessGroup').enterGroup\"\r\n        highlight-crumb-id=\"appCtrl.nf.CanvasUtils.getGroupId();\"\r\n        separator-func=\"appCtrl.nf.Common.isDefinedAndNotNull\"\r\n        is-tracking=\"appCtrl.serviceProvider.breadcrumbsCtrl.isTracking\"\r\n        get-version-control-class=\"appCtrl.serviceProvider.breadcrumbsCtrl.getVersionControlClass\"\r\n        get-version-control-tooltip=\"appCtrl.serviceProvider.breadcrumbsCtrl.getVersionControlTooltip\">\r\n</nf-breadcrumbs>\r\n<div id=\"graph-controls\">\r\n    <div id=\"navigation-control\" class=\"graph-control\">\r\n        <div class=\"graph-control-docked pointer fa fa-compass\" title=\"Navigate\"\r\n             ng-click=\"appCtrl.serviceProvider.graphControlsCtrl.undock($event)\">\r\n        </div>\r\n        <div class=\"graph-control-header-container hidden pointer\"\r\n             ng-click=\"appCtrl.serviceProvider.graphControlsCtrl.expand($event)\">\r\n");
      out.write("            <div class=\"graph-control-header-icon fa fa-compass\">\r\n            </div>\r\n            <div class=\"graph-control-header\">Navigate</div>\r\n            <div class=\"graph-control-header-action\">\r\n                <div class=\"graph-control-expansion fa fa-plus-square-o pointer\"></div>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n        </div>\r\n        <div class=\"graph-control-content hidden\">\r\n            <div id=\"navigation-buttons\">\r\n                <div id=\"naviagte-zoom-in\" class=\"action-button\" title=\"Zoom In\"\r\n                     ng-click=\"appCtrl.serviceProvider.graphControlsCtrl.navigateCtrl.zoomIn();\">\r\n                    <button><div class=\"graph-control-action-icon fa fa-search-plus\"></div></button>\r\n                </div>\r\n                <div class=\"button-spacer-small\">&nbsp;</div>\r\n                <div id=\"naviagte-zoom-out\" class=\"action-button\" title=\"Zoom Out\"\r\n                     ng-click=\"appCtrl.serviceProvider.graphControlsCtrl.navigateCtrl.zoomOut();\">\r\n                    <button><div class=\"graph-control-action-icon fa fa-search-minus\"></div></button>\r\n");
      out.write("                </div>\r\n                <div class=\"button-spacer-large\">&nbsp;</div>\r\n                <div id=\"naviagte-zoom-fit\" class=\"action-button\" title=\"Fit\"\r\n                     ng-click=\"appCtrl.serviceProvider.graphControlsCtrl.navigateCtrl.zoomFit();\">\r\n                    <button><div class=\"graph-control-action-icon icon icon-zoom-fit\"></div></button>\r\n                </div>\r\n                <div class=\"button-spacer-small\">&nbsp;</div>\r\n                <div id=\"naviagte-zoom-actual-size\" class=\"action-button\" title=\"Actual\"\r\n                     ng-click=\"appCtrl.serviceProvider.graphControlsCtrl.navigateCtrl.zoomActualSize();\">\r\n                    <button><div class=\"graph-control-action-icon icon icon-zoom-actual\"></div></button>\r\n                </div>\r\n                <div class=\"clear\"></div>\r\n            </div>\r\n            <div id=\"birdseye\"></div>\r\n        </div>\r\n    </div>\r\n    <div id=\"operation-control\" class=\"graph-control\">\r\n        <div class=\"graph-control-docked pointer fa fa-hand-o-up\" title=\"Operate\"\r\n");
      out.write("             ng-click=\"appCtrl.serviceProvider.graphControlsCtrl.undock($event)\">\r\n        </div>\r\n        <div class=\"graph-control-header-container hidden pointer\"\r\n             ng-click=\"appCtrl.serviceProvider.graphControlsCtrl.expand($event)\">\r\n            <div class=\"graph-control-header-icon fa fa-hand-o-up\">\r\n            </div>\r\n            <div class=\"graph-control-header\">Operate</div>\r\n            <div class=\"graph-control-header-action\">\r\n                <div class=\"graph-control-expansion fa fa-plus-square-o pointer\"></div>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n        </div>\r\n        <div class=\"graph-control-content hidden\">\r\n            <div id=\"operation-context\">\r\n                <div id=\"operation-context-logo\">\r\n                    <i class=\"icon\" ng-class=\"appCtrl.serviceProvider.graphControlsCtrl.getContextIcon()\"></i>\r\n                </div>\r\n                <div id=\"operation-context-details-container\">\r\n                    <div id=\"operation-context-name\">{{appCtrl.serviceProvider.graphControlsCtrl.getContextName()}}</div>\r\n");
      out.write("                    <div id=\"operation-context-type\" ng-class=\"appCtrl.serviceProvider.graphControlsCtrl.hide()\">{{appCtrl.serviceProvider.graphControlsCtrl.getContextType()}}</div>\r\n                </div>\r\n                <div class=\"clear\"></div>\r\n                <div id=\"operation-context-id\" ng-class=\"appCtrl.serviceProvider.graphControlsCtrl.hide()\">{{appCtrl.serviceProvider.graphControlsCtrl.getContextId()}}</div>\r\n            </div>\r\n            <div id=\"operation-buttons\">\r\n                <div>\r\n                    <div id=\"operate-configure\" class=\"action-button\" title=\"Configuration\">\r\n                        <button ng-click=\"appCtrl.serviceProvider.graphControlsCtrl.openConfigureOrDetailsView();\"\r\n                                ng-disabled=\"!(appCtrl.serviceProvider.graphControlsCtrl.canConfigureOrOpenDetails())\">\r\n                            <div class=\"graph-control-action-icon fa fa-gear\"></div></button>\r\n                    </div>\r\n                    <div class=\"button-spacer-small\" ng-if=\"appCtrl.nf.CanvasUtils.isManagedAuthorizer()\">&nbsp;</div>\r\n");
      out.write("                    <div id=\"operate-policy\" class=\"action-button\" title=\"Access Policies\" ng-if=\"appCtrl.nf.CanvasUtils.isManagedAuthorizer()\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['managePolicies'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!(appCtrl.nf.CanvasUtils.canManagePolicies())\">\r\n                            <div class=\"graph-control-action-icon fa fa-key\"></div></button>\r\n                    </div>\r\n                    <div class=\"button-spacer-large\">&nbsp;</div>\r\n                    <div id=\"operate-enable\" class=\"action-button\" title=\"Enable\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['enable'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!appCtrl.nf.CanvasUtils.getSelection().empty() && !appCtrl.nf.CanvasUtils.canModify(appCtrl.nf.CanvasUtils.getSelection());\">\r\n                            <div class=\"graph-control-action-icon fa fa-flash\"></div></button>\r\n                    </div>\r\n");
      out.write("                    <div class=\"button-spacer-small\">&nbsp;</div>\r\n                    <div id=\"operate-disable\" class=\"action-button\" title=\"Disable\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['disable'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!appCtrl.nf.CanvasUtils.getSelection().empty() && !appCtrl.nf.CanvasUtils.canModify(appCtrl.nf.CanvasUtils.getSelection());\">\r\n                            <div class=\"graph-control-action-icon icon icon-enable-false\"></div></button>\r\n                    </div>\r\n                    <div class=\"button-spacer-large\">&nbsp;</div>\r\n                    <div id=\"operate-start\" class=\"action-button\" title=\"Start\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['start'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!appCtrl.nf.CanvasUtils.getSelection().empty() && !appCtrl.nf.CanvasUtils.canModify(appCtrl.nf.CanvasUtils.getSelection());\">\r\n                            <div class=\"graph-control-action-icon fa fa-play\"></div></button>\r\n");
      out.write("                    </div>\r\n                    <div class=\"button-spacer-small\">&nbsp;</div>\r\n                    <div id=\"operate-stop\" class=\"action-button\" title=\"Stop\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['stop'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!appCtrl.nf.CanvasUtils.getSelection().empty() && !appCtrl.nf.CanvasUtils.canModify(appCtrl.nf.CanvasUtils.getSelection());\">\r\n                            <div class=\"graph-control-action-icon fa fa-stop\"></div></button>\r\n                    </div>\r\n                    <div class=\"button-spacer-large\">&nbsp;</div>\r\n                    <div id=\"operate-template\" class=\"action-button\" title=\"Create Template\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['template'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!(appCtrl.nf.CanvasUtils.canWriteCurrentGroup() && (appCtrl.nf.CanvasUtils.getSelection().empty() || appCtrl.nf.CanvasUtils.canRead(appCtrl.nf.CanvasUtils.getSelection())));\">\r\n");
      out.write("                            <div class=\"graph-control-action-icon icon icon-template-save\"></div></button>\r\n                    </div>\r\n                    <div class=\"button-spacer-small\">&nbsp;</div>\r\n                    <div id=\"operate-template-upload\" class=\"action-button\" title=\"Upload Template\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['uploadTemplate']();\"\r\n                                ng-disabled=\"!(appCtrl.nf.CanvasUtils.canWriteCurrentGroup() && appCtrl.nf.CanvasUtils.getSelection().empty());\">\r\n                            <div class=\"graph-control-action-icon icon icon-template-import\"></div></button>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n                <div style=\"margin-top: 5px;\">\r\n                    <div id=\"operate-copy\" class=\"action-button\" title=\"Copy\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['copy'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!appCtrl.nf.CanvasUtils.isCopyable(appCtrl.nf.CanvasUtils.getSelection());\">\r\n");
      out.write("                            <div class=\"graph-control-action-icon fa fa-copy\"></div></button>\r\n                    </div>\r\n                    <div class=\"button-spacer-small\">&nbsp;</div>\r\n                    <div id=\"operate-paste\" class=\"action-button\" title=\"Paste\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['paste'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!appCtrl.nf.CanvasUtils.isPastable()\">\r\n                            <div class=\"graph-control-action-icon fa fa-paste\"></div></button>\r\n                    </div>\r\n                    <div class=\"button-spacer-large\">&nbsp;</div>\r\n                    <div id=\"operate-group\" class=\"action-button\" title=\"Group\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['group'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!(appCtrl.nf.CanvasUtils.getComponentByType('Connection').isDisconnected(appCtrl.nf.CanvasUtils.getSelection()) && appCtrl.nf.CanvasUtils.canModify(appCtrl.nf.CanvasUtils.getSelection()));\">\r\n");
      out.write("                            <div class=\"graph-control-action-icon icon icon-group\"></div></button>\r\n                    </div>\r\n                    <div class=\"button-spacer-large\">&nbsp;</div>\r\n                    <div id=\"operate-color\" class=\"action-button\" title=\"Change Color\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['fillColor'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!appCtrl.nf.CanvasUtils.isColorable(appCtrl.nf.CanvasUtils.getSelection());\">\r\n                            <div class=\"graph-control-action-icon fa fa-paint-brush\"></div></button>\r\n                    </div>\r\n                    <div class=\"button-spacer-large\">&nbsp;</div>\r\n                    <div id=\"operate-delete\" class=\"action-button\" title=\"Delete\">\r\n                        <button ng-click=\"appCtrl.nf.Actions['delete'](appCtrl.nf.CanvasUtils.getSelection());\"\r\n                                ng-disabled=\"!appCtrl.nf.CanvasUtils.areDeletable(appCtrl.nf.CanvasUtils.getSelection());\">\r\n");
      out.write("                            <div class=\"graph-control-action-icon fa fa-trash\"></div><span>Delete</span></button>\r\n                    </div>\r\n                    <div class=\"clear\"></div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");
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
