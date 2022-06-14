# AUTO GENERATED FILE - DO NOT EDIT

#' @export
page <- function(children=NULL, id=NULL, size=NULL, style=NULL) {
    
    props <- list(children=children, id=id, size=size, style=style)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Page',
        namespace = 'dash_react_pdf',
        propNames = c('children', 'id', 'size', 'style'),
        package = 'dashReactPdf'
        )

    structure(component, class = c('dash_component', 'list'))
}
