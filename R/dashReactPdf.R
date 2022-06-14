# AUTO GENERATED FILE - DO NOT EDIT

#' @export
dashReactPdf <- function(children=NULL, id=NULL) {
    
    props <- list(children=children, id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'DashReactPdf',
        namespace = 'dash_react_pdf',
        propNames = c('children', 'id'),
        package = 'dashReactPdf'
        )

    structure(component, class = c('dash_component', 'list'))
}
