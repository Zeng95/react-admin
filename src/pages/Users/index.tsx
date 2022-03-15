import React from 'react';
import Wrapper from '../../components/Wrapper';

const Users: React.FC = () => {
  return (
    <Wrapper>
      <div className="table-responsive">
        <table className="table table-striped table-sm">
          {/* Table Head */}
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
              <th scope="col">Header</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr>
              <td>1,001</td>
              <td>random</td>
              <td>data</td>
              <td>placeholder</td>
              <td>text</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Users;
