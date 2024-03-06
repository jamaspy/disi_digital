import React from 'react';
import Wrapper from './Wrapper';
import Form from '../Form';
export const ContactPage = () => {
  return (
    <Wrapper id="contact">
      <div className="flex items-center justify-center min-h-[80vh] ">
        <div className="flex-1 flex flex-col px-8  max-w-[980px] mx-auto">
          <p className="text-5xl font-black">
            Contact<span className="text-highlight">.</span>
          </p>
          <hr className="my-4 border-highlight max-w-md" />
          <div className="flex flex-col md:flex-row gap-12 items-start justify-center ">
            <div className="flex-1 font-light">
              {/* <Form /> */}
              Under Construction{' '}
              <span className="text-xs">(Making it prettier)</span>
              <p className="block mt-2">
                In the meantime please email me:{' '}
                <a href="mailto:james@disi.au" className="text-highlight">
                  james@disi.au
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
