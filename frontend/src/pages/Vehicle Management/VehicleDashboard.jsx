import React from 'react';
import Card from '../pages/Vehicle Management/Card'

function VehicleDashboard () {
    return (
      <div>
        <div tabIndex="0" className="focus:outline-none">
            <div className="mx-auto container py-8">
                <div className="flex flex-wrap items-center lg:justify-between justify-center">
                    {/* Card 1 */}
                    <Card
                        imageSrc="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                        title="iphone XS"
                        timeAgo="4 days ago"
                        description="The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos"
                        additionalInfos={["12 months warranty", "Complete box"]}
                        location="Bay Area, San Francisco"
                    />
                    {/* Card 1 Ends */}
                    {/* Card 2 */}
                    <Card
                        imageSrc="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                        title="iphone XS"
                        timeAgo="4 days ago"
                        description="The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos"
                        additionalInfos={["12 months warranty", "Complete box"]}
                        location="Bay Area, San Francisco"
                    />
                    {/* Card 2 Ends */}
                    {/* Card 3 */}
                    <Card
                        imageSrc="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                        title="iphone XS"
                        timeAgo="4 days ago"
                        description="The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos"
                        additionalInfos={["12 months warranty", "Complete box"]}
                        location="Bay Area, San Francisco"
                    />
                    {/* Card 3 Ends */}
                    {/* Card 4 */}
                    <Card
                        imageSrc="https://cdn.tuk.dev/assets/templates/classified/Bitmap (1).png"
                        title="iphone XS"
                        timeAgo="4 days ago"
                        description="The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos"
                        additionalInfos={["12 months warranty", "Complete box"]}
                        location="Bay Area, San Francisco"
                    />
                    {/* Card 4 Ends */}
                </div>
                <div className="flex flex-wrap items-center lg:justify-between justify-center pb-10 mt-16">
                    {/* Card 1 */}
                    <Card
                        imageSrc="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                        title="iphone XS"
                        timeAgo="4 days ago"
                        description="The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos"
                        additionalInfos={["12 months warranty", "Complete box"]}
                        location="Bay Area, San Francisco"
                    />
                    {/* Card 1 Ends */}
                    {/* Card 2 */}
                    <Card
                        imageSrc="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                        title="iphone XS"
                        timeAgo="4 days ago"
                        description="The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos"
                        additionalInfos={["12 months warranty", "Complete box"]}
                        location="Bay Area, San Francisco"
                    />
                    {/* Card 2 Ends */}
                    {/* Card 3 */}
                    <Card
                        imageSrc="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                        title="iphone XS"
                        timeAgo="4 days ago"
                        description="The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos"
                        additionalInfos={["12 months warranty", "Complete box"]}
                        location="Bay Area, San Francisco"
                    />
                    {/* Card 3 Ends */}
                    {/* Card 4 */}
                    <Card
                        imageSrc="https://cdn.tuk.dev/assets/templates/classified/Bitmap.png"
                        title="iphone XS"
                        timeAgo="4 days ago"
                        description="The Apple iPhone XS is available in 3 colors with 64GB memory. Shoot amazing videos"
                        additionalInfos={["12 months warranty", "Complete box"]}
                        location="Bay Area, San Francisco"
                    />
                    {/* Card 4 Ends */}
                </div>
            </div>
            {/*- more free and premium Tailwind CSS components at https://tailwinduikit.com/ -*/}
        </div>
        </div>
    );
}

export default VehicleDashboard;
