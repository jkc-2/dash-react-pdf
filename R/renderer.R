# AUTO GENERATED FILE - DO NOT EDIT

#' @export
renderer <- function(id=NULL) {
    
    props <- list(id=id)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'renderer',
        namespace = 'dash_react_pdf',
        propNames = c('id'),
        package = 'dashReactPdf'
        )

    structure(component, class = c('dash_component', 'list'))
}
