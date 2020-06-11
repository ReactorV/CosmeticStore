import React from 'react';

import './index.scss';

class MasterPage extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    getClassNames = () => {
        return {
            header: 'header',
            footer: 'footer',
            page: 'page',
            pageContent: 'page-content'
        }
    };

    render() {
        const classNames = this.getClassNames();

        return (
            <>
                <div className={classNames.header}>
                    Header
                </div>
                <div className={classNames.page}>
                    <div className={classNames.pageContent}>
                        {this.props.children}
                    </div>
                </div>
                <div className={classNames.footer}>
                    Footer
                </div>
            </>
        );
    }
}

export default MasterPage;
